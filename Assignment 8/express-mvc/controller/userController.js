// controllers/userController.js
const UserModel = require('../model/userModel');

const userController = {
    getLogin(req, res) {
        res.render('login');
    },

    getRegister(req, res) {
        res.render('register');
    },

    postRegister(req, res) {
        const user = req.body;
        const userId = UserModel.createUser(user);
        res.send(`User registered with ID: ${userId}`);
    },
};

module.exports = userController;
