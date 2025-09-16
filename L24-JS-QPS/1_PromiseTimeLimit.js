var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise(async (res, rej) => {
            // Wait for t seconds and agar function chal gaya very good, else rej "TLE"
            let x = setTimeout(() => {
                rej("Time Limit Exceeded")
            }, t);

            try {
                let data = await fn(...args);
                res(data);
            } catch (err) {
                rej(err);
            }

            clearTimeout(x);
        })
    }
};


// Solution 2: 
var timeLimit = function (fn, t) {
    return async function (...args) {
        return Promise.race([
            new Promise((res, rej) => setTimeout(() => {
                rej('Time Limit Exceeded')
            }, t))
            ,
            fn(...args)
        ])
    }
};