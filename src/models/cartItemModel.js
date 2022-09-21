import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

cartItemSchema.pre(/^find/, function (next) {
  this.populate({ path: 'product', select: '' });
  next();
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;
