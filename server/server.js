var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');
const _ = require('lodash');

var { mongoose } = require('./db/mongoose');
var { User } = require('./models/user');
var { Todo } = require('./models/todo');
var { authenticate } = require('./middleware/authenticate');

var app = express();

app.use(bodyParser.json());

app.post('/todos', authenticate, (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text,
        _creator: req.user._id
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/todos', authenticate, (req, res) => {
    Todo.find({
        _creator: req.user._id
    }).then((todos) => {
        res.send({ todos }), (e) => {
            res.status(400).send(e);
        }
    });
});

app.get('/todos/:id',  authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findOne({
        _id: id,
        _creator: req.user._id
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);

    }).catch((e) => {
        res.status(400).send(e);
    });
})

app.post('/users', (req, res) => {
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });

    user.save().then((user) => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.post('/users/login', (req, res) => {

    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        res.status(400).send(e);
    });

    // User.find({email}).then((user)=>{

    // }).catch((e)=>{
    //     res.status(400).send(e);
    // });
});

app.delete('/users/me/token', authenticate, (req, res)=>{
    req.user.removeToken(req.token).then(()=>{
        res.status(200).send();
    },()=>{
        res.status(400).send();
    })
})

app.listen(3000, () => {
    console.log('started on port 3000');
});

module.exports = { app };


