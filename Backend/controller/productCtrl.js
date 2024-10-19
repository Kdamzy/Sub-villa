const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const multer = require("multer");
const path = require("path");

// Image storage
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

// Upload product image
const uploadProduct = upload.single('product');

// Add new product
const addProduct = asyncHandler(async (req, res) => {
  let products = await Product.find({});
  let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  const product = new Product({
    id: id,
    name: req.body.name,
    category: req.body.category,
    new_price: req.body.new_price,
  });

  await product.save();
  res.json({
    success: true,
    product,
  });
});

// Get all products
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get product by ID
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (product) {
    res.json({ success: true, message: "Product deleted" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Update product
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (product) {
    res.json({ success: true, product });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = {
  uploadProduct,
  addProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};
