import { isEmpty } from "lodash";
import React from "react";
import { sanitize } from "../../../utils/miscellaneous";
import MainLink from "../../mainlink";

export default function ProductTagsHeader({ data }) {
  return (
    <header className="py-12 dark:bg-gray-500 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-gray-300 dark:to-gray-700 mt-5">
      <div className="px-4 mx-auto w-full max-w-screen-xl text-center">
        {!isEmpty(data?.page?.roundupFields?.datepublished) ? (
          <span className="block mb-4 font-semibold text-gray-900 dark:text-white">
            Published{" "}
            <time className="uppercase font-normal text-gray-500 dark:text-gray-400">
              {data?.page?.roundupFields?.datepublished}
            </time>
          </span>
        ) : null}

        {!isEmpty(data?.page?.roundupFields?.hero) ? (
          <div
            className="mx-auto my-6 max-w-2xl text-2xl dark:text-gray-200 font-extrabold leading-none text-gray-900 sm:text-3xl lg:text-4xl"
            dangerouslySetInnerHTML={{
              __html: sanitize(data?.page?.roundupFields?.hero ?? {}),
            }}
          />
        ) : null}

        <p className="text-gray-600 font-medium m-5 content-center  justify-center flex flex-wrap gap-2">
          {!isEmpty(
            data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]?.parent
              ?.node?.parent?.node?.parent?.node?.name
          ) ? (
            <MainLink
              className="mx-1 text-sm text-gray-600 dark:text-gray-400 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-4  py-1 pb-1.5 bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
              href={
                data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]
                  .parent?.node?.parent?.node?.parent?.node?.uri
              }
            >
              {
                data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]
                  .parent?.node?.parent?.node?.parent?.node?.name
              }
            </MainLink>
          ) : null}

          {!isEmpty(
            data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]?.parent
              ?.node?.parent?.node?.name
          ) ? (
            <MainLink
              className="mx-1 text-sm text-gray-600 dark:text-gray-400 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-4  py-1 pb-1.5 bg-white hover:bg-gray-200 dark:bg-gray-900 dark:border-gray-700"
              href={
                data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]
                  .parent?.node?.parent?.node?.uri
              }
            >
              {
                data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]
                  .parent?.node?.parent?.node?.name
              }
            </MainLink>
          ) : null}

          {!isEmpty(
            data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]?.parent
              ?.node?.name
          ) ? (
            <MainLink
              className="mx-1 text-sm text-gray-600 dark:text-gray-400 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-4  py-1 pb-1.5 bg-white hover:bg-gray-200 dark:bg-gray-900 dark:border-gray-700"
              href={
                data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]
                  .parent?.node?.uri
              }
            >
              {
                data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]
                  .parent?.node?.name
              }
            </MainLink>
          ) : null}

          {!isEmpty(
            data?.page?.products?.nodes[0]?.productTaxonomies?.nodes[0]?.parent
              ?.node?.name
          ) ? (
            <MainLink
              className="mx-1 text-sm text-gray-600 dark:text-gray-400 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-4  py-1 pb-1.5 bg-white hover:bg-gray-200 dark:bg-gray-900 dark:border-gray-700"
              href={data?.page?.uri}
            >
              {data?.page?.name}
            </MainLink>
          ) : null}
        </p>

        <p className="text-lg font-normal text-gray-500 dark:text-gray-400"></p>
      </div>
    </header>
  );
}
