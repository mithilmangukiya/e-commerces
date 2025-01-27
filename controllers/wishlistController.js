const Wishlist = require("../models/Wishlist.js");

exports.addToWishlist = async (req, res) => {
  const { productId, collection } = req.body; 
    try {
    const newItem = new Wishlist({ productId, collection });  // Save collection
    await newItem.save();
    if(collection)
    {
      res.status(200).json({ message: "Item added to wishlist in collection " + collection });
    }
    else{
      res.status(200).json({ message: "Item added to wishlist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error adding to wishlist" });
  }
};

exports.getWishlist = async (req, res) => {
  const { collection } = req.query;  
  
  try {
    let wishlist;
    if (collection) {
      wishlist = await Wishlist.find({ collection }); 
    } else {
      wishlist = await Wishlist.find(); 
    }
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: "Error fetching wishlist" });
  }
};

exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.body;  

  try {
    if (productId) {
      // Check if the item exists in the wishlist before attempting to delete it
      const item = await Wishlist.findOne({ productId });
      
      if (!item) {
        return res.status(404).json({ message: "Item not found in wishlist" });  // If the item doesn't exist
      }

      // If the item exists, proceed with deletion
      await Wishlist.deleteOne({ productId });  
      res.status(200).json({ message: "Item removed from wishlist" });
    } else {
      res.status(400).json({ message: "Product ID is required" });  // If no productId is provided
    }
  } catch (error) {
    res.status(500).json({ error: "Error removing from wishlist" });
  }
};
