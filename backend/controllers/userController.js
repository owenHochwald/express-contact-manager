const asyncHandler = require("express-async-handler");

//@desc Register a new user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register user"});


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