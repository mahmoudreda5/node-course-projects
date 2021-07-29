require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

// User.findByIdAndUpdate('60fdf58d67fb5f17dcf5bf4d', { age: 1 }).then(user=> {
//     console.log(user);
//     return User.countDocuments({ age: 0});
// }).then(count => {
//     console.log(count)
// }).catch(error => {
//     console.log(error);
// });

Task.findByIdAndDelete('61024a2ba197b608f4455fd0').then(task => {
  console.log(task);
  return Task.countDocuments({ completed: false }); 
}).then(count => {
    console.log(count);
}).catch(error => {
    console.log(error);
})