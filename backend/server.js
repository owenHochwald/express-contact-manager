const express = require("express");
const dotenv = require("dotenv");
dotenv.config();


const app = express();

const port = process.env.PORT;

// provides a middleware to parse json data
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
// error handling middleware
app.use(errorHandler);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

