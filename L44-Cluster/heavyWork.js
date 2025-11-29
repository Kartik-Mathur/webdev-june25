function doWork() {
    let str = "";
    for (let i = 0; i < 1e5; i++) {
        str += `Hello World My Value is :${i}`
    }
    return str;
}
const output = doWork();

process.stdout.write(output);