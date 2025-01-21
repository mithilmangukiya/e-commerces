const express = require("express");
const {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController.js");
const { authenticateToken } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/add", authenticateToken, addToWishlist);
router.get("/", authenticateToken, getWishlist);
router.delete("/remove", authenticateToken, removeFromWishlist);

module.exports = router;
