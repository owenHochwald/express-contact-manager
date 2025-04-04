const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        name: {
            type: String,
            required: [true, "Please add a contact name"]
        },
        email: {
            type: String,
            required: [true, "Please add an email address"]
        },
        phone: {
            type: String,
            required: [true, "Please add a phone number"]
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    });

module.exports = mongoose.model("Contact", contactSchema);