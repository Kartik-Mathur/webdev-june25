class Semaphore {
    constructor(max) {
        this.max = max; // Maximum concurrency
        this.current = 0; // Current running count
        this.queue = []; // Queue to hold the waiting promises
    }

    // Acquire a permit (wait until there is space)
    acquire() {
        return new Promise((resolve, reject) => {
            if (this.current < this.max) {
                this.current++;
                resolve();
            } else {
                this.queue.push(resolve); // Add the resolve function to the queue
            }
        });
    }

    // Release a permit (after task is done)
    release() {
        if (this.queue.length > 0) {
            const next = this.queue.shift();
            next(); // Resolve the next waiting promise
        } else {
            this.current--;
        }
    }

    // This is a utility function to run tasks with the semaphore
    async run(task) {
        await this.acquire();
        try {
            await task();
        } finally {
            this.release();
        }
    }
}

// Example usage:

const semaphore = new Semaphore(3); // Allow only 3 concurrent tasks

// Simulate async tasks
const asyncTask = async (id) => {
    console.log(`Task ${id} started`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async work
    console.log(`Task ${id} finished`);
};

// Run multiple tasks with the semaphore
const tasks = [];
for (let i = 1; i <= 10; i++) {
    tasks.push(semaphore.run(() => asyncTask(i)));
}

Promise.all(tasks).then(() => {
    console.log('All tasks completed');
});
