import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";

export const GET_PAGE = gql`
  query GET_PAGE($uri: ID!, $first: Int!, $after: String) {
    page: productTag(id: $uri, idType: SLUG) {
      name
      slug
      products(first: $first, after: $after) {
        nodes {
          title
          uri
          single_product_acf {
            productAida
            shortDescription
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

export const GET_PAGE_BY_ID = gql`
	query GET_PAGE_BY_ID($id: ID!) {
		${HeaderFooter}
	  page(idType: DATABASE_ID, id: $id) {
	    id
	    titles
	    content
	    slug
	    uri
		status
	}
	${MenuFragment}
	${SeoFragment}
`;
