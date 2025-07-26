function readFile(url) {
    return new Promise((res, rej) => {
        if (!url) return rej("URL is not defined");
        console.log("ReadFile starts");
        setTimeout(() => {
            let file = url.split('/').pop();
            res(file);
        }, 3000);
    })
}

function compressFile(file) {
    return new Promise((res, rej) => {
        console.log("Compression starts");
        setTimeout(() => {
            let cmpFile = file.split('.')[0] + '.zip'
            res(cmpFile);
        }, 3000);
    })
}

function uploadFile(file) {
    return new Promise((res, rej) => {
        console.log("Uploading starts");
        setTimeout(() => {
            let newUrl = 'http://newFakeUrl.com/' + file;
            res(newUrl);
        }, 3000);
    })
}



let url = 'http://fakeUrl.com/solve.mp3';

readFile(url)
    .then(compressFile)
    .then(uploadFile)
    .then((url) => {
        console.log(url);
    })
    .catch((err) => {
        console.log(err)
    })


// readFile(url)
//     .then((file) => {
//         console.log("File is", file);
//         compressFile(file)
//             .then((cmpFile) => {
//                 console.log("Compressed File recieved", cmpFile);
//                 uploadFile(cmpFile)
//                     .then((newUrl) => {
//                         console.log("Updated url", newUrl);
//                     })
//             })
//     })
//     .catch(msg => {
//         console.log(msg);
//     })