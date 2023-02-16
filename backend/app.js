const express = require("express");
const cors = require("cors");
const contactRouter = require("./app/routers/contact.router.js");
const apiError = require("./app/api-error.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/contacts", contactRouter);

app.use((req, res, next) => {
   return next(new apiError(404, "Not Found"));
});

app.use((err, req, res, next) => {
   res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
