const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorhandler")
const connectDb = require("./config/dbConnection")
dotenv.config();

connectDb();

const app = express();

const port = process.env.PORT;

// provides a middleware to parse json data
app.use(express.json());
// error handling middleware
app.use(errorHandler);
app.use("/api/contacts", require("./routes/contactRoutes"));




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

