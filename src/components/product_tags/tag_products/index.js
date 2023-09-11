import React from "react";
import { sanitize } from "../../../utils/miscellaneous";
import MainLink from "../../mainlink";
import Image from "next/image";
import { isEmpty } from "lodash";

export default function TagProducts({ product }) {
  return (
    <div className="w-full">
      {product?.nodes.map((product, index) => {
        return (
          <div
            key={index}
            className="border flex my-5 flex-col max-w-full lg:max-w-full items-center bg-white rounded-none  shadow-lg md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className=" flex justify-between rounded-t my-auto ">
              <div className="w-80 text-lg justify-center items-center flex text-gray-900 md:text-xl dark:text-white my-auto py-6">
                {!isEmpty(product?.single_product_acf?.productImageMainUrl) ? (
                  <Image
                    src={product?.single_product_acf?.productImageMainUrl?.replace(
                      ".jpg",
                      "._AC_UL320.jpg"
                    )}
                    height="256"
                    width="256"
                    objectFit="contain"
                    alt={product?.title}
                  />
                ) : null}
              </div>
            </div>

            <div className="flex flex-col p-4 leading-normal ">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-300 px-4 cursor-pointer">
                <MainLink
                  href={product?.single_product_acf?.productUrl}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  {product?.title}
                </MainLink>
              </h5>

              <MainLink href={product?.uri}>
                <div
                  className="text tracking-tight py-2 px-4 text-gray-700 dark:text-gray-400 cursor-pointer"
                  dangerouslySetInnerHTML={{
                    __html: sanitize(
                      product?.single_product_acf?.shortDescription ?? {}
                    ),
                  }}
                />
              </MainLink>
              <div className="flex  flex-col my-3 px-4 items-center  xs:flex-row">
                <a
                  href={product?.single_product_acf?.productUrl}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <button
                    type="button"
                    className="py-2.5 w-40 px-5 mr-2 text-sm focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full font-medium text-gray-900  bg-white rounded-full border-4 border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    View On Amazon
                  </button>
                </a>

                <MainLink href={product?.uri}>
                  <button
                    type="button"
                    className="py-2.5 w-40 px-5 mr-2 text-sm focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full font-medium text-gray-900  bg-white rounded-full border-4 border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Product Details
                  </button>
                </MainLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
