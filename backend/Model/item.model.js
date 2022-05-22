const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema(
  {
    itemID: String,
    itemCity: String,
    itemName: String,
    itemLocation: String,
    itemQuantity: Number,
    itemPrice: Number,
    itemDescription: String,
    isDeleted: Boolean,
    deletionComment: String,
  },
  { collection: "itemsWithCities" },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", ItemSchema);
