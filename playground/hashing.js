const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
}

/*** jwt.io ***/
var token = jwt.sign(data, 'abc123');
console.log(token);

var decode = jwt.verify(token, 'abc123');
console.log(decode);

// var message = "i am mobin";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
//     id: 4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'imMobin').toString()
// }

// //Invalid User
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var result = SHA256(JSON.stringify(token.data) + 'imMobin').toString();
// if(result === token.hash){
//     console.log('Genuine User !!')
// }else{
//     console.log('Invalid User');
// }
