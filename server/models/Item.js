import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
  itemName: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  tax: { 
    type: Number
  },
  image: { 
    type: String, 
    required: true 
  },
  category: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category', required: true
  },
  ratingsAndReviews: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'RatingReview'
  }],
  isVeg: { 
    type: Boolean, 
    required: true 
  },
  quantity: { type: Number},
});
const  Item = mongoose.model('Item', itemSchema);
export   default Item

