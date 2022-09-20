import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      ref: 'Brand',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    details: String,
    discount: {
      type: Number,
      default: 0,
    },
    images: [String],
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
