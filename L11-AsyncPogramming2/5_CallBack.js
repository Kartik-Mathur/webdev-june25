// 1. fn readFile time is 3 sec from http://fakeUrl.com/solve.mp3
// 2. solve.mp3 is compressed to solve.zip in 3 sec
// 3. solve.zip is uploaded to new url http://newFakeUrl.com/solve.zip in 3 sec
function readFile(url, cb) {
    console.log("Start readfile");

    setTimeout(() => {
        let file = url.split('/').pop();
        console.log("Readfile complete", file);
        cb(file, uploadFile);
    }, 3000);

}

function compressFile(file, cb) {
    console.log("Compression Starts");
    setTimeout(() => {
        console.log("Compression Complete");
        let cmpFile = file.split('.')[0] + '.zip';
        cb(cmpFile);
    }, 3000);
}

function uploadFile(file) {
    console.log("Uploading starts");
    setTimeout(() => {
        let newUrl = 'http://newFakeUrl.com/' + file;
        console.log("Uploading Complete", newUrl);
    }, 3000);
}

let url = 'http://fakeUrl.com/solve.mp3';
readFile(url, compressFile);