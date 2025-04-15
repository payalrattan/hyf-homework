function YesNoFail4Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            console.log(randomNumber);
            if (randomNumber < 0.5) {
                resolve("yes");
            } else if (randomNumber < 0.8) {
                resolve("no");
            } else {
                reject("fail");
            }
        }, 4000); // 4 seconds delay
    });
}
YesNoFail4Seconds().then((data) => {
    console.log(data);
})
    .catch((error) => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("done execution");
    });