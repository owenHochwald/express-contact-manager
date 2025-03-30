const express = require("express");
const router = express.Router();
const {getContact, getContactById} = require("../controllers/contactController");


router.get("/", getContact);

router.get("/:id", getContactById);


router.post("/", createContact);


router.put("/:id", updateContact);


router.delete("/:id", deleteContact);

module.exports = router;