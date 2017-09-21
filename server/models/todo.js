var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }, completed: {
        type: Boolean,
        default: false
    }, completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

// var newTodo = new Todo({ text: 'Cook dinner' });

// newTodo.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log('unable to save the document');
// });

// var otherTodo = new Todo({
//     text: 'Something to do'
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined,2));
// },(e)=>{
//     console.log('unable to save the document' + e);
// });


