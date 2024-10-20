const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = 5000;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
dbConnect();
app.use(express.json());
app.use(cors());

app.use("/api/user", authRouter);
app.use("/api/products", productRouter);

app.use(notFound);
app.use(errorHandler);

// API CREATION
app.get("/",(req,res) => {
  res.send("App is running successfully")
})


// endpoint for image upload
app.use('/images',express.static('upload/images'))



app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running  at PORT ${PORT}`);
  }
  else
  {
    console.log("Error : "+error)
  }
  })
