import { isEmpty } from "lodash";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";

/**
 * Custom SEO component
 *
 * Used to seo meta tags for each page
 *
 * @param {Object} seo Seo.
 * @param {string} uri Page URI.
 * @see https://www.npmjs.com/package/next-seo
 *
 * @returns {JSX.Element}
 *
 */
const Seo = ({ seo, uri }) => {
  const {
    breadcrumbTitle,
    breadcrumbs,
    canonicalUrl,
    description,
    openGraph,
    robots,
    title,
  } = seo;

  let metaRobotsNofollow = robots[0] ?? "";
  let metaRobotsNoindex = robots[1] ?? "";

  if (uri.includes("/search")) {
    metaRobotsNoindex = "noindex";
  }

  const opengraphImage = openGraph?.image ?? "";
  let opengraphDescription = openGraph?.description ?? "";

  const opengraphTitle = title ?? "";
  const opengraphSiteName = openGraph?.siteName ?? "";
  const metaDesc = description ?? "";

  const currentLocation = process.browser ? window.location.origin : "";
  const opengraphUrl =
    (process.env.NEXT_PUBLIC_NEXTJS_SITE_URL
      ? process.env.NEXT_PUBLIC_NEXTJS_SITE_URL
      : currentLocation) + uri;

  let test = "";

  if (uri.includes("category")) {
    test = `${breadcrumbTitle} - PetsMarketPlc`;
  } else if (uri.includes("best")) {
    test = `Best ${breadcrumbTitle} - PetsMarketPlc`;
  } else if (uri.includes("brand")) {
    test = `${breadcrumbTitle} - PetsMarketPlc`;
  }

  return (
    <NextSeo
      title={title || test}
      description={metaDesc || opengraphDescription || title}
      canonical={opengraphUrl}
      index={metaRobotsNoindex}
      follow={metaRobotsNofollow}
      openGraph={{
        type: "website",
        locale: "en_US",
        url: opengraphUrl,
        title: opengraphTitle,
        description: opengraphDescription,
        images: [
          {
            url: opengraphImage?.sourceUrl,
            width: 1280,
            height: 720,
          },
        ],
        /* eslint-disable */
        site_name: opengraphSiteName,
        /* eslint-enable */
      }}
      twitter={{
        handle: "@petsmarket_plc",
        site: "https:www.twitter.com/petsmarket_plc",
        cardType: "summary_large_image",
      }}
    />
  );
};

Seo.propTypes = {
  seo: PropTypes.object,
};

Seo.defaultProps = {
  seo: {
    canonical: "",
    title: "",
    metaDesc: "",
    metaRobotsNoindex: "",
    metaRobotsNofollow: "",
    opengraphDescription: "",
    opengraphTitle: "",
    opengraphImage: {
      sourceUrl: "",
    },
    opengraphUrl: "",
    opengraphSiteName: "",
  },
};

export default Seo;
