const { Schema, model } = require('mongoose');

const menuItemSchema = new Schema({
  itemName: {
    type: String,
    required: 'Please include a NAME for the item...',
    trim: true,
  },
  itemDescr: {
    type: String,
    required: 'Please include a DESCRIPTION of the item...',
    trim: true,
  },
  itemPrice: {
    type: String,
    required: 'Please include a PRICE for the i',
    trim: true,
  },
});

const menuItem = model('menuItem', menuItemSchema);

module.exports = menuItem;
