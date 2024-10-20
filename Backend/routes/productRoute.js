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

router.post("/upload", uploadProduct, (req, res) => {
  res.json({
    success: true,
    imageUrl: `http://localhost:5000/images/${req.file.filename}`,
  });
});

router.post("/", addProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

module.exports = router;
