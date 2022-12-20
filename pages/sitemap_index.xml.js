import { GET_URLS } from "../src/queries/sitemap";
import client from "../src/apollo/client";

// function generateSiteMap(posts) {
//   return `<?xml version="1.0" encoding="UTF-8"?>
//    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//      ${posts
//        .map((test2) => {
//          return `
//        <url>
//            <loc>${`${test2}`}</loc>
//        </url>
//      `;
//        })
//        .join("")}
//    </urlset>
//  `;
// }

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://petsmarketplc.com/post-sitemap.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/page-sitemap.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap1.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap2.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap3.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap4.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap5.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap6.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap7.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap8.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap9.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product-sitemap10.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/category-sitemap.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product_taxonomy-sitemap.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product_tag-sitemap.xml</loc>
</url>
<url>
<loc>https://petsmarketplc.com/product_brand-sitemap.xml</loc>
</url>
</urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  // const request = await fetch(EXTERNAL_DATA_URL);

  const { data } = await client.query({
    query: GET_URLS,
  });

  const url_list = [];

  data?.rankMathSettings?.sitemap?.contentTypes.map((test) => {
    if (test?.sitemapUrl != null && test?.isInSitemap != false) {
      url_list.push(test?.sitemapUrl);
    }
  });

  data?.rankMathSettings?.sitemap?.taxonomies.map((test) => {
    if (test?.sitemapUrl != null && test?.isInSitemap != false) {
      url_list.push(test?.sitemapUrl);
    }
  });

  const posts = url_list;

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {
      data: data || {},
    },
  };
}

export default SiteMap;
