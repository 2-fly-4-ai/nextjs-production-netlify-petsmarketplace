import React from "react";
import MainLink from "../../mainlink";
import { sanitize } from "../../../utils/miscellaneous";
import { isEmpty } from "lodash";

export default function SideBar({ data }) {
  let page_tags = [];
  let page_brands = [];

  //TAG CLOUDS FOUND ON RIGHT HAND COLUMN
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

  data?.page?.products?.nodes.map((product) => {
    let seo_check = product?.productBrands?.nodes[0]?.seo?.robots[1];
    if (seo_check == "noindex") {
      return;
    }
    if (product?.productBrands?.nodes[0]?.name != null) {
      let x = product?.productBrands?.nodes[0]?.name;
      let y = x.split(" ").length;
      let z = x.split("").length;
      if (y > 3 || z > 18) {
        return;
      }
    }
    page_brands.push(product?.productBrands);
  });

  page_tags = page_tags
    .filter(
      (v, i, a) =>
        a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
    )
    .sort();
  page_brands = page_brands
    .filter(
      (v, i, a) =>
        a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
    )
    .sort();
  return (
    <aside className="xl:block mt-5 lg:ml-5  ">
      <div className="xl:w-[336px] sticky top-6 ">
        <div className="p-4 mb-6 rounded-none border-2 shadow-lg dark:border-gray-700">
          <h4 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase">
            Related Articles
          </h4>

          <div className=" py-8 text-center lg:py-0  flex ">
            <div className="sm:hidden lg:flex pb-2 w-full mb-5 lg:px-2 flex-col border-2 dark:border-gray-600">
              <div className="space-x-2 mt-2 flex flex-col">
                <span className="text-gray-800 dark:text-gray-100 mx-2 my-4 text-left font-semibold">
                  Tags:{" "}
                </span>
                <div>
                  <ul className="flex flex-wrap align items-start gap-1">
                    {page_tags.map((tag, index) => (
                      <li
                        key={index}
                        className="text-gray-500 hover: dark:text-gray-400 mb-3"
                      >
                        <MainLink href={tag.uri}>
                          <a
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
              <div className="space-x-2 mt-5 flex flex-col">
                <span className="text-gray-800 dark:text-gray-300 mx-2 my-4 text-left font-semibold">
                  Brands:{" "}
                </span>
                <div>
                  {!isEmpty(page_brands) && Array.isArray(page_brands) ? (
                    <ul className="flex flex-wrap  align items-start gap-1">
                      {page_brands.map((brand, index) => (
                        <li
                          key={index}
                          className="text-gray-500 dark:text-gray-400 mb-3"
                        >
                          {!isEmpty(brand?.nodes[0]?.uri) ? (
                            <MainLink href={brand?.nodes[0]?.uri}>
                              <a
                                className="whitespace-nowrap text-gray-600 dark:text-gray-400  capitalize font-medium border-2 focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-300 rounded-full px-2 overflow-hidden text-sm py-0.5 pb-1.5  hover:bg-gray-200 "
                                dangerouslySetInnerHTML={{
                                  __html: sanitize(brand?.nodes[0]?.name ?? {}),
                                }}
                              />
                            </MainLink>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <ul className="flex flex-col align items-start gap-1">
            {page_tags.map(
              (tag, index) =>
                index > 3 &&
                index < 8 && ( // <= only 5 items
                  <li
                    key={tag.name}
                    className="text-gray-500 dark:text-gray-400 mb-3"
                  >
                    <article className="flex mb-8">
                      <div className="flex flex-col justify-center">
                        <div
                          className="mb-2 text-xl font-bold leading-tight capitalize text-gray-900 dark:text-gray-300"
                          dangerouslySetInnerHTML={{
                            __html: sanitize(tag?.name ?? {}),
                          }}
                        />

                        {!isEmpty(tag?.roundupFields?.hero) ? (
                          <div
                            className="text-gray-600 dark:text-gray-300 max-w-lg  text-sm py-0.5 pb-1.5 "
                            dangerouslySetInnerHTML={{
                              __html: sanitize(tag?.roundupFields?.hero ?? {}),
                            }}
                          />
                        ) : null}

                        <MainLink
                          href="#"
                          className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                        >
                          Read Buyer&lsquo;s Guide
                        </MainLink>
                      </div>
                    </article>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
}
