const express = require("express");
const router = express.Router();
const {
  uploadProduct,
  addProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} = require("../controller/productCtrl");

// Image upload endpoint
router.post("/upload", uploadProduct, (req, res) => {
  res.json({
    success: true,
    imageUrl: `http://localhost:5000/images/${req.file.filename}`,
  });
});


router.post("/", uploadProduct, addProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
