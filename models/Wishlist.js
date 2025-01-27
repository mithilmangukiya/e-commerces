const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  collection: { type: String },  
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
