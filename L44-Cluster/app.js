const express = require('express');
const app = express();
const PORT = 4444;
const { exec, spawn } = require('child_process');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
function doWork() {
    for (let i = 0; i < 1e9; i++) {

    }
    return "Work Done";
}

// app.get('/fast', (req, res) => {
    
//     const child = spawn("node",["heavyWork.js"]);
//     let error = ""
//     let output = "";
//     child.stdout.on('data', (data) => {
//         output += data.toString();
//     })

//     child.stderr.on('data', (data) => {
//         error += data.toString();
//     })

//     child.on('close', (code) => {
//         if (error) {
//             console.log(error);
//             return;
//         }

//         res.json({
//             output
//         })
//     })


// })


app.get('/fast', (req, res) => {
    exec("node heavyWork.js", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }

        // console.log(`stdout: ${stdout}`);
        // console.log(stdout)
        res.send(stdout);
    })
})



// app.get('/', (req, res) => {
//     exec("ls -a", (error, stdout, stderr) => {
//         if (error) {
//             console.error(`exec error: ${error}`);
//             return;
//         }
//         if (stderr) {
//             console.error(`stderr: ${stderr}`);
//         }

//         console.log(`stdout: ${stdout}`);
//         res.send(stdout);
//     })
// })



// Traditional Way
app.get('/', (req, res) => {
    let data = doWork();

    res.send(data);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});