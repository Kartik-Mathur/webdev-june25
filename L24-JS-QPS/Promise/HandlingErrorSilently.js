function random() {
    return new Promise((res, rej) => {
        try {
            let a = 1;
            a();
        } catch (err) {
            rej(err);
        }
    })
}

random()
    .then(msg => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })
