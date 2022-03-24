const { menuItem } = require("../models");

const resolvers = {
    Query: {
      menuItems: async () => {
        return menuItem.find();
      },
    },
  
    Mutation: {
      addmenuItem: async (parent, { itemName, itemDescr, itemPrice }) => {
        return menuItem.create({ itemName, itemDescr, itemPrice });
      },
      removemenuItem: async (parent, { menuItemId }) => {
        return menuItem.findOneAndDelete({ _id: menuItemId });
      },
    },
  };
  
  module.exports = resolvers;
  