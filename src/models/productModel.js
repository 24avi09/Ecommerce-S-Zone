const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      multipleOf: 0.01,
      required: true,
    },
    currencyId: {
      type: String,
      required: true,
      trim: true,
    },
    currencyFormat: {
      type: String,
      required: true,
      trim: true,
    },
    isFreeShipping: {
      type: Boolean,
      default: false,
      trim: true,
    },
    productImage: {
      type: String,
      required: true,
      trim: true,
    },
    style: {
      type: String,
      trim: true,
    },
    availableSizes: {
      type: [{ type: String }],
      enum: ["S", "XS", "M", "X", "L", "XXL", "XL"],
      required: true,
    },

    installments: {
      type: Number,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
