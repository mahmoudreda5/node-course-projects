const doWork = async () => {
    try{
        const sum1 = await add(-3, 4);
        return await add(sum1, 7);
    } catch(e) {
        console.log('ex: ' + e);
        return e;
    }
};

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) return reject('negative numbers');
            return resolve(a + b);
        }, 1000);
    });
};

doWork()
.then(result => console.log(result))
.catch(error => console.log(error));

console.log('hello there !!!');