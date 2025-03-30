const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register a new user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username: username,
        email: email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({id: user._id, email: user.email});
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
});

//@desc Login an existing user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user"});


});

//@desc Get a current a user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Get current user information"});
});

module.exports = { registerUser, loginUser, currentUser };