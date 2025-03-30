const asyncHandler = require("express-async-handler");

//@desc Get all contract
//@route GET /api/contacts
//@access public

const getContact = async (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
}

//@desc Get all contract
//@route GET /api/contacts
//@access public

const getContactById = async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` })
}

//@desc Creates new contract
//@route POST /api/contacts
//@access public

const createContact = async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are required");
    }
    res.status(201).json({ message: "Create contact" })
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` })
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
}


module.exports = { getContact, getContactById, createContact, updateContact, deleteContact };