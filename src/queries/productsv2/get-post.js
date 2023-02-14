import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";
import ImageFragment from "../fragments/image";

export const GET_POST = gql`
	query GET_POST($uri: String) {
      ${HeaderFooter}
	  post: productBy(uri: $uri) {
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
		productBrands {
			nodes {
				name
				slug
				uri
				
	
			}
			}
			productTags {
				nodes {
				  name
				  products {
					nodes{
						title
						single_product_acf {
							asin
							brand
							productAida
							productDescription
							productFeatures
							productImageGalleryUrls
							productImageMainUrl
							productProsCons
							productRating
							upc
							productReviewsQuantity
							productReviewShort
							productReviewLong
							modelNumber
							keywordTerm
							fieldGroupName
							
							productSpecs
							productUrl
							
						  }
					  }
				  }
				  slug
				  uri
				  taxonomyName
				  
				}
			}
			productTaxonomies {
				nodes {
				  uri
				  name
				  link
				  taxonomyName
				  parent {
					node {
					  name
					  link
					  parent {
						node {
						  name
						  link
						  parent {
							node {
							  name
							  link
							  parent {
								node {
								  name
								  link
								  parent {
									node {
									  name
									  link
									  parent {
										node {
										  name
										  link
										}
									  }
									}
								  }
								}
							  }
							}
						  }
						}
					  }
					}
				  }
				  
				}
			  }


		single_product_acf {
			asin
			brand
			productAida
			productDescription
			productFeatures
			productImageGalleryUrls
			productImageMainUrl
			productProsCons
			productRating
			upc
			productReviewsQuantity
			productReviewShort
			productReviewLong
			modelNumber
			keywordTerm
			fieldGroupName
			shortDescription
			productSpecs
			productUrl
			expertOpinion
		  }
		  
		  

	    
      
	  featuredImage {
        node {
        ...ImageFragment
        }
		}
		  
	  }
	}
	${MenuFragment}
	
	${ImageFragment}
`;

export const GET_POST_BY_ID = gql`
	query GET_POST_BY_ID($id: ID!) {
		${HeaderFooter}
	  product(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
	  }
	}
	${MenuFragment}
	${SeoFragment}
`;
