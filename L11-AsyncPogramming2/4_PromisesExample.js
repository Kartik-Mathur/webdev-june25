let SabziLana = new Promise((res, rej) => {
    let time = 18;

    if (time >= 8 && time <= 13) res();
    else rej();
})


SabziLana
    .then(() => {
        console.log("Sabzi AaGai")
    })
    .catch(() => {
        console.log("Sabzi Khatam")
    })