import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    avatar: String,
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
