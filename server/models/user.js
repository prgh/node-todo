var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};


// var newUser = new User({
//     email: 'abc@example.com'
// });

// newUser.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log('unable to save the user' + e);
// });