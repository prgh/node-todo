//const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


// var message = 'I am robo 10';
// var hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

var data = {
    id: 4
};

var token = jwt.sign(data, 'abc123');
console.log(token);

var decoded = jwt.verify(token,'abc123');
//var decoded = jwt.verify(token+1,'abc123');
//var decoded = jwt.verify(token,'99abc123');
console.log('decoded: ', decoded);


// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'secretkey').toString()
// };

// //token.data.id = 5;
// //token.hash= SHA256(JSON.stringify(token.data)).toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'secretkey').toString();

// if (resultHash === token.hash){
//     console.log('Data was not modified');
// } else {
//     console.log('Data was modified');
// }

