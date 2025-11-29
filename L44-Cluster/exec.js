const {exec} = require('child_process');

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