function sabziLaana(cb) {
    console.log("sabzi laane gaye");
    setTimeout(() => {
        console.log("sabzi aa gai");
        cb("Aaloo");
    }, 3000);
}

function khanaBanana(cb) {
    console.log("Khana banana start")
    setTimeout(function () {
        console.log("Khana banana complete");
        cb("French Fries");
    }, 3000);
}

function bartanDhona(cb) {
    console.log("Bartan dhona start")
    setTimeout(function () {
        console.log("Bartan dhona end")
        cb();
    }, 3000);
}

sabziLaana(function (sabzi) {
    console.log("Sabzi aai hai", sabzi)
    khanaBanana(function (khana) {
        console.log("Khana Bann gaya", khana);
        bartanDhona(function () {
            console.log("Aaj ka din khatam");
        })
    })
})