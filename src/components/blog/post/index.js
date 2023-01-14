import Link from "next/link";
import Image from "../../image";
import { sanitize } from "../../../utils/miscellaneous";
import { isEmpty } from "lodash";

const Post = ({ post }, index) => {
  return (
    <div className="mb-8 flex flex-col justify-center items-center" key={index}>
      <div>
        {!isEmpty(post?.single_product_acf?.productImageMainUrl) ? (
          <Image
            src={post?.single_product_acf?.productImageMainUrl?.replace(
              ".jpg",
              "._AC_UL320.jpg"
            )}
            className="h-60"
          />
        ) : null}
      </div>
      <a href={`${post?.uri}`}>
        <a>
          <h3
            className="my-1 text-2xl text-center sm:text-left tracking-tight text-gray-900 dark:text-white hover:text-blue-700"
            dangerouslySetInnerHTML={{ __html: sanitize(post?.title ?? "") }}
          />
        </a>
      </a>
      <div
        className="mb-4  text-gray-700 dark:text-gray-400 prose dark:prose-a:text-blue-400"
        dangerouslySetInnerHTML={{
          __html: sanitize(post?.excerpt?.replace("backend.", "www.") ?? ""),
        }}
      />
    </div>
  );
};

export default Post;
