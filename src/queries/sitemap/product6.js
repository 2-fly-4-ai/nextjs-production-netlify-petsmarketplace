import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo";

export const GET_URLS = gql`
  query NewQuery {
    rankMathSettings {
      sitemap {
        sitemapIndexUrl
        contentTypes(include: PRODUCT) {
          sitemapUrl
          isInSitemap
          connectedContentNodes(
            first: 1000
            after: "YXJyYXljb25uZWN0aW9uOjI1OTY2"
          ) {
            edges {
              node {
                link
                seo {
                  robots
                }
              }
            }
          }
        }
      }
    }
  }
`;
