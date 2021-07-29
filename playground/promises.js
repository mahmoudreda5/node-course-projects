// const dopromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1, 2, 7]);
//         reject('error');
//     }, 1000);
// });

// dopromise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
};

// add(3, 4).then(sum => {
//     console.log(sum);
//     add(sum, 7).then(sum2 => {
//         console.log(sum2);
//     }).catch(error => {
//         console.log(error);
//     }); 
// }).catch(e => {
//     console.log(e);
// });

add(3, 4).then(sum => {
    console.log(sum);
    return add(sum, 7);
}).then(sum => {
    console.log(sum);
}).catch(error => {
    console.log(error);
});