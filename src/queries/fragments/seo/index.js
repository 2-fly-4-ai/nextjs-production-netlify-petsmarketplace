const SeoFragment = `
fragment SeoFragment on PostTypeSEO {
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
`;

export default SeoFragment;
