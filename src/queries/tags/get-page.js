import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";

export const GET_PAGE = gql`
query GET_PAGE($uri: ID!) {
	${HeaderFooter}
	page: productTag(id: $uri, idType: SLUG) {
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
	  products(first: 24) {
		nodes {
		  title
		  uri
		  single_product_acf {
			asin
			brand
			productAida
			shortDescription
			productImageMainUrl
			productUrl
		  }
		  productTags {
			nodes {
			  name
			  uri
			  roundupFields {
				hero
				roundupFeatureImage
			  }
			}
		  }
		  productBrands {
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
	  roundupFields {
		whatToConsider
		typesOf
		roundupFeatureImage
		intro
		howWeChose
		hero
		faqs
		author
		datepublished
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
		status
	  }
	}
	${MenuFragment}
	
`;
