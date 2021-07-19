// // regular vs arrow functions
// const sq = x => x * x;

// console.log(sq(3));

// const event = {
//     name: 'past one',
//     guestlist: ['mahmoud', 'amina'],
//     list() {
//         console.log(this.name);
//         this.guestlist.forEach((guest) => {
//             console.log(guest + ' is attending ' + this.name);
//             console.log(this);
//         });
//     }
// };

// event.list();

// // callback pattern
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             longitude: 0,
//             latitude: 0
//         };
//         callback(data);
//     }, 1000);
// };

// geocode('shoubra', (data) => {
//     console.log(data);
// });

// // Object property shorthand
// const name = 'mahmoud';
// const age = 26;

// const user = {
//     name,
//     age,
//     location: 'shoubra'
// };

// console.log(user);

// // Object destructuring
const product = {
    label: 'notebook',
    price: 77,
    stock: 200,
    salePrice: undefined,
    rating: 5
};

// const {label: productLabel, stock, price, rating = 7} = product;
// console.log(productLabel);
// console.log(stock);
// console.log(price);
// console.log(rating);

const trans = (type, {label, price}) => {
    console.log(type);
    console.log(label);
    console.log(price);
    console.log(product);
};

trans('order', product);