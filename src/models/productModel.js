import mongoose from 'mongoose';

// export const category = {
//   MOBILEPHONE: 0,
//   LAPTOP: 1,
//   TABLET: 2,
//   GADGET: 3,
//   SOUND: 4,
//   CLOCK: 5,
//   OTHER: 6,
// };

export const categories = [
  'mobilePhone',
  'laptop',
  'tablet',
  'gadget',
  'sound',
  'clock',
  'other',
];

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
      type: Number,
      enum: categories,
      required: true,
    },
    details: String,
    price: {
      type: Number,
      required: true,
    },
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
