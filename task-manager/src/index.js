const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     return res.status(503).send('server is under mentainance');
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port} ..`);
});

// const pet = {
//     name: 'cat',
//     age: 7
// };

// pet.toJSON = function () {
//     console.log('i am here');
//     delete this.age;
//     return this;
// };

// console.log(JSON.stringify(pet));