const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type menuItem {
    _id: ID
    itemName: String
    itemDescr: String
    itemPrice: String
  }

  type Query {
    menuItems: [menuItem]!
  }

  type Mutation {
    addmenuItem(itemName: String!, itemDescr: String!, itemPrice:String!): menuItem
    removemenuItem(menuItemId: ID!): menuItem
  }
`;

module.exports = typeDefs;