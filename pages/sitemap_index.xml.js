import { GET_URLS } from "../src/queries/sitemap";
import client from "../src/apollo/client";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
       .map((test2) => {
         return `
       <url>
           <loc>${`${test2}`}</loc>
       </url>
     `;
       })
       .join("")}
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
