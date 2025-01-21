const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
  description: {
    type: String,
    required: false,
  },
  // parentId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category', 
  //   default: null, 
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isActive: { type: Boolean, default: true }
});

const categoryModel = mongoose.model('Category', categorySchema);
module.exports=categoryModel;
