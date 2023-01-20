import { isEmpty, isArray } from "lodash";
import NewsletterSubscribe from "./NewsletterSubscribe";
import MainLink from "../../mainlink";

const Footer = ({ footer, footerMenus1, footerMenus2, footerMenus3 }) => {
  return (
    <footer className="bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 from-green-700 to-green-600 flex-wrap">
      <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:-10 flex-wrap">
        <div className=" grid-cols-2 gap-8 lg:grid-cols-4 margin-auto justify-center flex flex-wrap">
          <div className="lg:mx-auto">
            <h2 className="mb-4 text-sm font-bold text-gray-100 uppercase dark:text-white">
              Pet-Store
            </h2>
            {!isEmpty(footerMenus1) && isArray(footerMenus1) ? (
              <ul>
                {footerMenus1.map((footerMenu) => (
                  <li
                    key={footerMenu?.node?.id}
                    className="text-gray-500 dark:text-gray-400 mb-4"
                  >
                    <MainLink
                      className="text-gray-100  "
                      href={footerMenu?.node?.path}
                    >
                      {footerMenu?.node?.label}
                    </MainLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="lg:mx-auto">
            <h2 className="mb-4 text-sm font-bold text-gray-100 uppercase dark:text-white">
              Legal
            </h2>
            {!isEmpty(footerMenus2) && isArray(footerMenus2) ? (
              <ul className="">
                {footerMenus2.map((footerMenu) => (
                  <li
                    key={footerMenu?.node?.id}
                    className="text-gray-500 dark:text-gray-400 mb-4"
                  >
                    <MainLink
                      className="text-gray-100  "
                      href={footerMenu?.node?.path}
                    >
                      {footerMenu?.node?.label}
                    </MainLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="lg:mx-auto">
            <h2 className="mb-4 text-sm font-bold text-gray-100 uppercase dark:text-white">
              Archives
            </h2>
            {!isEmpty(footerMenus3) && isArray(footerMenus3) ? (
              <ul>
                {footerMenus3.map((footerMenu) => (
                  <li
                    key={footerMenu?.node?.id}
                    className="text-gray-500 dark:text-gray-400 mb-4"
                  >
                    <MainLink
                      className="text-gray-100  "
                      href={footerMenu?.node?.path}
                    >
                      {footerMenu?.node?.label}
                    </MainLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <NewsletterSubscribe />
        </div>

        <hr className="border-green-900 sm:mx-auto dark:border-gray-700 mt-8 " />
      </div>
      <div className="bg-black py-1">
        <span className="my-auto block text-sm text-center text-gray-100 font-bold  dark:text-gray-400">
          {footer?.copyrightText}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
