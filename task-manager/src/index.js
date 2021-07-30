const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const task = require('./models/task');
const Task = require('./models/task');
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

// const jwt = require('jsonwebtoken');
// const fun = async () => {
//     const token = jwt.sign({_id: 'user_id'}, 'random', { expiresIn: '2 days'});
//     console.log(token);

//     const data = jwt.verify(token, 'random');
//     console.log(data);
// };

// fun();