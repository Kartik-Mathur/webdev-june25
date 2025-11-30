const cluster = require('node:cluster');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    const path = require('path');
    const express = require('express');
    const app = express();
    const PORT = 4444;
    const { exec, spawn } = require('child_process');


    app.set('view engine', 'hbs');
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        res.send(`Hello ${process.pid}`);
    })

    app.get('/fast', (req, res) => {

        const child = spawn("node", ["heavyWork.js"]);
        let error = ""
        let output = "";
        child.stdout.on('data', (data) => {
            output += data.toString();
        })

        child.stderr.on('data', (data) => {
            error += data.toString();
        })

        child.on('close', (code) => {
            if (error) {
                console.log(error);
                return;
            }

            res.json({
                output,
                message: `Result from ${process.pid}`
            })
        })
    })

    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });


    console.log(`Worker ${process.pid} started`);
}
