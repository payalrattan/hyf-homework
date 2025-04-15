const resolvedPromise = new Promise((resolve, reject) => {
console.log(`promise is pending and will fulfill`);
setTimeout(() => {
    resolve(`hello`);
}, 4000);
})
console.log(resolvedPromise);

const rejectedPromise = new Promise((resolve, reject) => {
    console.log(`promise is pending and will reject`);
    setTimeout(() => {
        reject(`oops!something went wrong`);
    }, 6000);
    })
    console.log(rejectedPromise);

    resolvedPromise.then((data) => {
        console.log(data);
    })

    rejectedPromise.catch((error) => {
        console.error(error);
    })