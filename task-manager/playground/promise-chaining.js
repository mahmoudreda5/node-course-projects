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

// const updateAgeAndCount = async (id, age) => {
//   await User.findByIdAndUpdate(id, { age });
//   return User.countDocuments({ age });
// };

// updateAgeAndCount('60fdfd7718dbae24a82f7d15', 2)
// .then(count => console.log('count: ' + count))
// .catch(error => console.log(error));

// Task.findByIdAndDelete('61024a2ba197b608f4455fd0').then(task => {
//   console.log(task);
//   return Task.countDocuments({ completed: false }); 
// }).then(count => {
//     console.log(count);
// }).catch(error => {
//     console.log(error);
// })

deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  return Task.count({completed: false});
};

deleteTaskAndCount('610249a3a197b608f4455fcc')
.then(count => console.log('count: ' + count))
.catch(error => console.log(error));