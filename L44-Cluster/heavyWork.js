function doWork() {
    let str = "";
    for (let i = 0; i < 1e9; i++) {
        // str += `Hello World My Value is :${i}`
    }
    return "Work Done";
}
const output = doWork();

process.stdout.write(output);