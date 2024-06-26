import React from "react";
import Link from "next/link";
import { sanitize } from "../../../utils/miscellaneous";
import MainLink from "../../mainlink";

export default function Tags({ data }) {
  let page_tags = [];

  data?.page?.products?.nodes.map((product) => {
    product?.productTags?.nodes.map((product) => {
      let x = product?.name;
      let y = x.split(" ").length;
      let z = x.split("").length;
      if (y > 4 || z > 25) {
        return;
      }

      page_tags.push(product);
    });
  });

  page_tags = page_tags.filter(
    (v, i, a) =>
      a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
  );

  return (
    <div className="space-x-2 mt-2 flex flex-col ">
      <span className="text-gray-800 dark:text-gray-200 mx-2 my-4 text-left font-semibold">
        Related Tags:{" "}
      </span>
      <div>
        <ul className="flex flex-wrap align items-start gap-1 p-2">
          {page_tags.slice(0, 20).map((tag) => (
            <li
              key={tag.name}
              className="text-gray-500 dark:text-gray-400 mb-1"
            >
              <MainLink href={tag.uri}>
                <div
                  className="whitespace-nowrap text-gray-600 dark:text-gray-400 border-2 dark:border-gray-700 focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-2 text-sm py-0.5 pb-1.5 bg-white dark:bg-gray-800 hover:bg-gray-200 capitalize font-medium"
                  dangerouslySetInnerHTML={{
                    __html: sanitize(tag?.name ?? {}),
                  }}
                />
              </MainLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
