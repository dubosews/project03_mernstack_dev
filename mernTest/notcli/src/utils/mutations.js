import { gql } from "apollo-server";

export const ADD_MENUITEM = gql`
  mutation addmenuItem($itemName: String!, $itemDescr: String!, $itemPrice: String!) {
    addmenuItem(itemName: $itemName, itemDescr: $itemDescr, itemPrice: $itemPrice) {
      _id
      itemName
      itemDescr
      itemPrice
    }
  }
`;