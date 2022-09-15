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
    logo: String,
  },
  { timestamps: true }
);

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
