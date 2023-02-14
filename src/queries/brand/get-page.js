import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";

export const GET_PAGE = gql`
query GET_PAGE($uri: ID!, $first: Int!, $after: String) {
	${HeaderFooter}
	page: productBrand(id: $uri, idType: SLUG) {
	  name
	  slug
	  uri
	  seo {
			breadcrumbs {
			  text
			  url
			}
			title
			metaDesc
			metaRobotsNoindex
			metaRobotsNofollow
			opengraphAuthor
			opengraphDescription
			opengraphTitle
			schema {
			  raw
			}
			opengraphImage {
			  sourceUrl
			}
			opengraphSiteName
			opengraphPublishedTime
			opengraphModifiedTime
			twitterTitle
			twitterDescription
			twitterImage {
			  sourceUrl
			}
		  }
	  brand_fields {
		description
		searchVolume
	  }
	  products(
		first: $first
		after: $after
		where: {taxQuery: {taxArray: {taxonomy: PRODUCTBRAND}}}
	  ) {
		nodes {
		  title
		  uri
		  single_product_acf {
			asin
			brand
			productAida
			productImageMainUrl
			upc
			modelNumber
			keywordTerm
			fieldGroupName
			productUrl
		  }
		  productTags {
			nodes {
			  name
			  uri
			}
		  }
		  productTaxonomies {
			nodes {
			  uri
			  name
			  parent {
				node {
				  name
				  uri
				  parent {
					node {
					  name
					  uri
					  parent {
						node {
						  name
						  uri
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		}
		pageInfo {
			hasNextPage
			endCursor
		}
    }
  }
}
${MenuFragment}
`;

export const GET_PAGE_BY_ID = gql`
	query GET_PAGE_BY_ID($id: ID!) {
		${HeaderFooter}
	  page(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
		seo {
			breadcrumbs {
			  text
			  url
			}
			title
			metaDesc
			metaRobotsNoindex
			metaRobotsNofollow
			opengraphAuthor
			opengraphDescription
			opengraphTitle
			schema {
			  raw
			}
			opengraphImage {
			  sourceUrl
			}
			opengraphSiteName
			opengraphPublishedTime
			opengraphModifiedTime
			twitterTitle
			twitterDescription
			twitterImage {
			  sourceUrl
			}
		  }
		status
	  }
	}
	${MenuFragment}
	
`;
