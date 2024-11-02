const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const path = require("path");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
dbConnect();

// Middleware
app.use(express.json());
app.use(cors());

// Static path for uploaded images
app.use('/images', express.static(path.join(__dirname, 'upload/images')));

// Routes
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");

app.use("/api/user", authRouter);
app.use("/api/products", productRouter);

// Default route
app.get("/", (req, res) => {
  res.send("App is running successfully");
});

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running at PORT ${PORT}`);
  } else {
    console.log("Error:", error);
  }
});
