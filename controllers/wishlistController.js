const Wishlist = require("../models/Wishlist.js");

// Add to wishlist
exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    const newItem = new Wishlist({ userId, productId });
    await newItem.save();
    res.status(200).json({ message: "Item added to wishlist" });
  } catch (error) {
    res.status(500).json({ error: "Error adding to wishlist" });
  }
};

// Get wishlist
exports.getWishlist = async (req, res) => {
  const userId = req.user.id;

  try {
    const wishlist = await Wishlist.find({ userId });
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: "Error fetching wishlist" });
  }
};

// Remove from wishlist
exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    await Wishlist.deleteOne({ userId, productId });
    res.status(200).json({ message: "Item removed from wishlist" });
  } catch (error) {
    res.status(500).json({ error: "Error removing from wishlist" });
  }
};
