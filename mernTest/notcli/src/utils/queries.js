import { gql } from "apollo-server";

export const QUERY_MENUITEMS = gql`
  query getmenuItem {
    menuItems {
      _id
      itemName
      itemDescr
      itemPrice
    }
  }
`;