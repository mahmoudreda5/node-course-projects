const doCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [1, 2, 7]);
    }, 1000);
};

doCallback((error, result) => {
    if(error) {
        return console.log(error);
    }
    console.log(result);
});