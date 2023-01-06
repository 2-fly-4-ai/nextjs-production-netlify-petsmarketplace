import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";

export const GET_PAGE = gql`
  query GET_PAGE($uri: ID!, $first: Int!, $after: String) {
    page: productTaxonomy(id: $uri, idType: SLUG) {
      name
      slug
      uri
      products: products(
        first: $first
        after: $after
        where: { taxQuery: { taxArray: { taxonomy: PRODUCTTAXONOMY } } }
      ) {
        nodes {
          title
          uri
          single_product_acf {
            productAida
            productImageMainUrl
            productUrl
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
