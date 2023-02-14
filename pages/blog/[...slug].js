import client from "../../src/apollo/client";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import Layout from "../../src/components/layout";
import { FALLBACK, handleRedirectsAndReturnData } from "../../src/utils/slug";
import { GET_POST } from "../../src/queries/posts/get-post";
import { GET_POST_SLUGS } from "../../src/queries/posts/get-posts";
import { sanitize } from "../../src/utils/miscellaneous";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import NewsletterSubscribe from "../../src/components/layout/footer/NewsletterSubscribe";
import MainLink from "../../src/components/mainlink";

// THis is just an example, we wont be using pagination in this way. (Just LOAD MORE Everything)

const Post = ({ data }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout data={data} isPost>
      <main className="pb-16 lg:pb-24 bg-white dark:bg-gray-900 px-4 ">
        <div className="flex relative z-20 gap-6 justify-between px-4 mx-auto max-w-screen-xl  bg-white dark:bg-gray-900 rounded">
          <article className="w-full max-w-none htmlFormat htmlFormat-sm sm:format-base lg:format-lg htmlFormat-blue dark:format-invert">
            <header className="py-12 bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 from-gray-100 to-gray-300 mt-4 h-max">
              <div className="px-4 mx-auto w-full max-w-screen-xl text-center">
                <span className="block mb-4 font-semibold text-gray-900 dark:text-white">
                  Published{" "}
                  <time className="uppercase font-normal text-gray-500 dark:text-gray-400">
                    {data?.post?.date}
                  </time>
                </span>

                {!isEmpty(data?.post?.title) ? (
                  <div
                    className="mx-auto my-6  max-w-2xl text-2xl dark:text-white font-extrabold leading-none text-gray-900 sm:text-3xl lg:text-4xl"
                    dangerouslySetInnerHTML={{
                      __html: sanitize(data?.post?.title ?? {}),
                    }}
                  />
                ) : null}

                <p className="text-lg font-normal text-gray-500 dark:text-gray-400"></p>
              </div>
            </header>

            {/* h1/author info + Share Buttons */}
            <div className="px-4 flex flex-col lg:flex-row justify-between lg:items-center py-6 border-t border-b border-gray-200 dark:border-gray-700">
              <span className="text-base mb-4 lg:mb-0 font-normal text-gray-500 dark:text-gray-400">
                By{" "}
                <MainLink
                  href="#"
                  rel="author"
                  className="font-bold text-gray-900 dark:text-white no-underline hover:underline capitalize"
                >
                  {!isEmpty(data?.post?.author?.node?.name)
                    ? data?.post?.author?.node?.name
                    : "PetsMarketPlace"}
                </MainLink>{" "}
                in{" "}
                <MainLink
                  href="#"
                  className="font-normal text-gray-500 dark:text-gray-400 no-underline hover:underline"
                >
                  Posts
                </MainLink>
              </span>

              <aside aria-label="Share social media" className="flex">
                <div className="inline-flex items-center gap-2 focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full mr-2 text-s font-medium text-gray-900 no-underline bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-700">
                  <FacebookShareButton
                    url={`https://petsmarketplace.com${data?.post?.uri}`}
                    quote={"Best Pets Products"}
                    hashtag={`#${data?.page?.nodes[0]?.name.replace(" ", "")}`}
                    description={"aiueo"}
                    className="inline-flex items-center  text-xs font-medium w-24 justify-center h-8 border"
                  >
                    <FacebookIcon
                      size={24}
                      iconFillColor="white"
                      round
                      className="mr-2 p-0 "
                      bgStyle={{ fill: "Orange" }}
                    />{" "}
                    Share
                  </FacebookShareButton>
                </div>
                <div className="inline-flex items-center gap-2 focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full mr-2 text-s font-medium text-gray-900 no-underline bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-700">
                  <TwitterShareButton
                    title={"test"}
                    url={`https://petsmarketplace.com${data?.post?.uri}`}
                    hashtags={[
                      `#${data?.page?.nodes[0]?.name.replace(" ", "")}`,
                    ]}
                    className="inline-flex items-center  text-xs font-medium w-24 justify-center h-8 border"
                  >
                    <TwitterIcon
                      size={24}
                      iconFillColor="white"
                      round
                      className="mr-2 p-0 "
                      bgStyle={{ fill: "black" }}
                    />
                    Tweet
                  </TwitterShareButton>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `https://petsmarketplace.com${data?.post?.uri}`
                    )
                  }
                  className="inline-flex items-center py-1 px-6 text-s font-medium text-gray-900 no-underline bg-white rounded-full border-4 border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {" "}
                  <svg
                    className="mr-2 w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                  Copy link
                </button>
              </aside>
            </div>

            <div
              className="px-4 prose my-8 max-w-none dark:text-gray-400 dark:prose-headings:text-gray-200 dark:prose-p:text-gray-400  prose-headings:font-medium prose-h3:text-2xl prose-li:list-disc dark:prose-li:text-gray-400"
              dangerouslySetInnerHTML={{
                __html: sanitize(data?.post?.content ?? {}),
              }}
            />
            <div className="flex justify-between items-center py-6 border-t border-b border-gray-200 dark:border-gray-700">
              <aside aria-label="Share social media" className="flex">
                <div className="inline-flex items-center gap-2 focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full mr-2 text-s font-medium text-gray-900 no-underline bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-700">
                  <FacebookShareButton
                    url={`https://petsmarketplace.com${data?.post?.uri}`}
                    quote={"Best Pets Products"}
                    hashtag={`#${data?.page?.nodes[0]?.name.replace(" ", "")}`}
                    description={"aiueo"}
                    className="inline-flex items-center  text-xs font-medium w-24 justify-center h-8 border"
                  >
                    <FacebookIcon
                      size={24}
                      iconFillColor="white"
                      round
                      className="mr-2 p-0 "
                      bgStyle={{ fill: "Orange" }}
                    />{" "}
                    Share
                  </FacebookShareButton>
                </div>
                <div className="inline-flex items-center gap-2 focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full mr-2 text-s font-medium text-gray-900 no-underline bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-700">
                  <TwitterShareButton
                    title={"test"}
                    url={`https://petsmarketplace.com${data?.post?.uri}`}
                    hashtags={[
                      `#${data?.page?.nodes[0]?.name.replace(" ", "")}`,
                    ]}
                    className="inline-flex items-center  text-xs font-medium w-24 justify-center h-8 border"
                  >
                    <TwitterIcon
                      size={24}
                      iconFillColor="white"
                      round
                      className="mr-2 p-0 "
                      bgStyle={{ fill: "black" }}
                    />
                    Tweet
                  </TwitterShareButton>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `https://petsmarketplace.com${data?.post?.uri}`
                    )
                  }
                  className="inline-flex items-center py-1 px-6 text-s font-medium text-gray-900 no-underline bg-white rounded-full border-4 border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {" "}
                  <svg
                    className="mr-2 w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                  Copy link
                </button>
              </aside>
              <div className="not-format">
                <button
                  data-tooltip-target="tooltip-save"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none dark:text-gray-400 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    ></path>
                  </svg>
                </button>
                <div
                  id="tooltip-save"
                  role="tooltip"
                  className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                >
                  Save this article
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button
                  id="dropdownMenuIconHorizontalButton"
                  data-dropdown-toggle="dropdownDotsHorizontal"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none dark:text-gray-400 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </article>
          <aside
            className="hidden mt-4 xl:block"
            aria-labelledby="sidebar-label"
          >
            <div className="xl:w-[336px] sticky top-6">
              <div className="p-4 mb-6  border border-gray-200 dark:border-gray-700">
                <h4 className="mb-2 text-sm font-bold text-gray-900 dark:text-gray-200 uppercase">
                  PETSMARKET PLACE LATEST NEWS
                </h4>

                <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                  Get all the stories you need-to-know from the most powerful
                  name in Animal news delivered to your inbox.
                </p>

                <NewsletterSubscribe />
              </div>

              <div className="p-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="mb-4 text-sm font-bold text-gray-900 dark:text-gray-200 uppercase">
                  Latest Posts
                </h4>

                {!isEmpty(data?.posts?.nodes)
                  ? data?.posts?.nodes.map((post) => {
                      return (
                        <div className="mb-6" key={post?.title}>
                          <h5 className="mb-2 text-base font-bold leading-tight text-gray-800 dark:text-gray-200">
                            {post?.title}
                          </h5>
                          <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                            {post?.excert}
                          </p>

                          <MainLink
                            href={post?.uri}
                            className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-gray-400 hover:no-underline"
                          >
                            Read Article
                          </MainLink>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_POST,
    variables: {
      uri: `/blog/${params.slug}`,
    },
  });

  const defaultProps = {
    props: {
      data: data || {},
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };

  return handleRedirectsAndReturnData(defaultProps, data, errors, "post");
}

/**
 * Since the page name 'does not' use catch-all routes,
 *htmlForexample [slug],
 * that's why params would contain just slug and not an array of slugs , unlike [...slug].
 *htmlForexample, If we need to have dynamic route '/foo/'
 * Then we would add paths: [ params: { slug: 'foo' } } ]
 * Here slug will be 'foo', then Next.js will statically generate the page at /foo/
 *
 * At build time next js will will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
 *
 * @returns {Promise<{paths: [], fallback: boolean}>}
 */
export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_POST_SLUGS,
  });

  const pathsData = [];

  data?.posts?.nodes &&
    data?.posts?.nodes.map((post) => {
      if (!isEmpty(post?.uri)) {
        const slugs = post?.uri?.split("/").filter((pageSlug) => pageSlug);
        pathsData.push({ params: { slug: slugs } });
      }
    });

  return {
    paths: pathsData,
    fallback: FALLBACK,
  };
}
