import MainLink from "../../mainlink";
import Image from "../../image";
import { sanitize } from "../../../utils/miscellaneous";
import { isEmpty } from "lodash";

const Post = ({ post }, index) => {
  return (
    <div className="mb-8 flex flex-col justify-center items-center" key={index}>
      <div>
        {!isEmpty(post?.single_product_acf?.productImageMainUrl) ? (
          <img
            src={post?.single_product_acf?.productImageMainUrl?.replace(
              ".jpg",
              "._AC_UL320.jpg"
            )}
            className=""
            alt="post?.title"
          />
        ) : null}
      </div>
      <MainLink href={`${post?.uri}`} className="my-6 mr-auto">
        <h3
          className="text-2xl text-center sm:text-left tracking-tight text-gray-900 dark:text-white hover:text-blue-700"
          dangerouslySetInnerHTML={{ __html: sanitize(post?.title ?? "") }}
        />
      </MainLink>
      <div
        className="mb-4 text-gray-700 dark:text-gray-400 prose dark:prose-a:text-blue-400"
        dangerouslySetInnerHTML={{
          __html: sanitize(post?.excerpt?.replace("backend.", "www.") ?? ""),
        }}
      />
    </div>
  );
};

export default Post;
