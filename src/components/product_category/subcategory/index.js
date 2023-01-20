import React from "react";
import { isEmpty, slice } from "lodash";
import { sanitize } from "../../../../src/utils/miscellaneous";
import MainLink from "../../mainlink";

export default function subcategory({ data }) {
  return (
    <div>
      {!isEmpty(data?.page?.children?.nodes) ? (
        <div className="space-x-2 mt-2 flex flex-col">
          <span className="text-gray-800 dark:text-gray-200 mx-2 my-4 text-left font-semibold">
            Sub-Categories:{" "}
          </span>
          <div>
            <ul className="flex flex-wrap align items-start gap-1 p-2">
              {data?.page?.children?.nodes.map((child) => (
                <li
                  key={child.name}
                  className="text-gray-500 dark:text-gray-400 mb-1"
                >
                  <MainLink href={child.uri}>
                    <div
                      className="whitespace-nowrap text-gray-600 dark:text-gray-400 border-2 dark:border-gray-700 focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-2 text-sm py-0.5 pb-1.5 bg-white dark:bg-gray-800 hover:bg-gray-200 capitalize font-medium"
                      dangerouslySetInnerHTML={{
                        __html: sanitize(child.name ?? {}),
                      }}
                    />
                  </MainLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
