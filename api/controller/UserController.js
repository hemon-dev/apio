const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/User');
const { registrationValidator, loginValidator } = require('../validations/Validator');

// LIST USERS
index = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({
            message: error
        })
    }
}

// REGISTER USERS
register = async (req, res) => {

    // VALIDATE REQUEST DATA
    const { error } = await registrationValidator(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // CHECK IF USER ALREADY EXIST WITH SUBMITTED EMAIL ID
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('User with provided email ID is already exists');

    /**
     * STORE DATA IF NO ERROR
     * HASH THE PLAIN TEXT PASSWORD BY GENERATING SALT
     */
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.status(200).json({user: user._id});
    } catch (error) {
        res.json({
            message: error
        });
    }
}

login = async (req, res) => {
    // VALIDATE REQUEST DATA
    const { error } = await loginValidator(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // CHECK IF USER ALREADY EXIST WITH SUBMITTED EMAIL ID
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(401).send('Wrong email or password!');

    // COMPARE SUBMITTED PASSWORD WITH HASH
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) return res.status(401).send('Wrong email or password!');

    res.status(200).send('Logged in!');
}

module.exports = {
    index: index,
    register: register,
    login: login
};