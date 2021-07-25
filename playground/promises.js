const dopromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 7]);
        reject('error');
    }, 1000);
});

dopromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});