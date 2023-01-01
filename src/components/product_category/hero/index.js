import React from "react";
import { isEmpty } from "lodash";

export default function Hero({ data }) {
  return (
    <div
      className="flex flex-col lg:items-start  my-5 pt-2 content-center bg-gradient-to-r  from-gray-100 dark:from-gray-900 to-gray-300 dark:to-gray-700
    "
    >
      <h1 className="px-2  pt-2">
        <a
          className="m-5 text-gray-500 dark:text-gray-400 text-5xl"
          href={data?.page?.name}
        >
          {data?.page?.name}
        </a>
      </h1>
      {/* <p className="text-gray-400 p-1 ml-1 text-lg font-medium">RESULTS</p> */}
      <p className="text-gray-700 font-medium m-auto gap-1.5 py-5 flex-col flex max-w-max sm:flex-row lg:ml-0 px-5 ">
        {!isEmpty(
          data?.page?.parent?.node?.parent?.node?.parent?.node?.name
        ) ? (
          <a
            className="x-1 text-sm text-gray-600 dark:text-gray-400 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-4  py-1 pb-1.5 bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
            href={data?.page?.parent?.node?.parent?.node?.uri}
          >
            {data?.page?.parent?.node?.parent?.node?.parent?.node?.name}
          </a>
        ) : null}

        {!isEmpty(data?.page?.parent?.node?.parent?.node?.name) ? (
          <a
            className="x-1 text-sm text-gray-600 dark:text-gray-400 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-4  py-1 pb-1.5 bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
            href={data?.page?.parent?.node?.parent?.node?.uri}
          >
            {data?.page?.parent?.node?.parent?.node?.name}
          </a>
        ) : null}

        {!isEmpty(data?.page?.parent?.node?.name) ? (
          <a
            className="x-1 text-sm text-gray-600 dark:text-gray-400 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-4  py-1 pb-1.5 bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
            href={data?.page?.parent?.node?.uri}
          >
            {data?.page?.parent?.node?.name}
          </a>
        ) : null}

        {!isEmpty(data?.page?.name) ? (
          <a
            className="x-1 text-sm text-gray-600 dark:text-gray-400 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full border-gray-300 rounded-full px-4  py-1 pb-1.5 bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
            href={data?.page?.uri}
          >
            {data?.page?.name}
          </a>
        ) : null}
      </p>
    </div>
  );
}
