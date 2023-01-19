import client from "../src/apollo/client";
import { GET_PAGE } from "../src/queries/pages/get-page";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";
import {
  FALLBACK,
  handleRedirectsAndReturnData,
  isCustomPageUri,
} from "../src/utils/slug";
import { sanitize } from "../src/utils/miscellaneous";
import Layout from "../src/components/layout";
import Image from "next/image";

export default function Home({ data }) {
  return (
    <Layout data={data}>
      <div>
        <section className="bg-white dark:bg-gray-900 ">
          <div className=" grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  lg:py-16  xl:py-16  lg:grid-cols-12">
            <div className=" lg:col-span-6 w-full pr-10 flex flex-col my-auto">
              <div className="max-w-screen-xl  py-4 mr-auto text-center lg:py-4 lg:px-2 select-none">
                <dl className="grid max-w-screen-md gap-2 sm:gap-4 mx-auto text-gray-900 grid-cols-3 dark:text-white">
                  <div className="rounded-lg lg:hover:-translate-y-2 duration-500 flex flex-col items-center justify-center bg-green-400 xl:p-3 p-1 shadow-lg">
                    <dt className="text-3xl font-bold text-gray-900 md:text-3xl">
                      57K+
                    </dt>
                    <dd className="font-medium text-gray-900 dark:text-gray-800">
                      Products
                    </dd>
                  </div>
                  <div className="rounded-lg lg:hover:-translate-y-2 duration-500 flex flex-col items-center justify-center bg-yellow-300 xl:p-3 p-1 shadow-lg">
                    <dt className="text-3xl font-bold md:text-3xl text-gray-900">
                      4500+
                    </dt>
                    <dd className="font-medium  text-gray-900 dark:text-gray-800">
                      Brands
                    </dd>
                  </div>
                  <div className="rounded-lg lg:hover:-translate-y-2 duration-500 flex flex-col items-center justify-center bg-red-400 xl:p-3 p-1 shadow-lg">
                    <dt className=" text-3xl font-bold md:text-3xl text-gray-900">
                      11K+
                    </dt>
                    <dd className="font-medium text-gray-900 dark:text-gray-800">
                      Best Picks
                    </dd>
                  </div>
                  {/* <div className="rounded-lg lg:hover:-translate-y-2 duration-500 flex flex-col items-center justify-center bg-red-400 xl:p-3 p-1 shadow-lg">
                    <dt className=" text-3xl font-bold md:text-3xl text-gray-900">
                      4K+
                    </dt>
                    <dd className="font-medium text-gray-900 dark:text-gray-800">
                      Best Picks
                    </dd>
                  </div> */}
                </dl>
              </div>
              <h1 className="w-full mb-4 text-4xl  tracking-tight leading-none md:text-5xl lg:text-4xl 2xl:text-6xl dark:text-white">
                {data?.header?.siteTagLine}
              </h1>
              <p className="max-w-xl mb-6  text-gray-600 lg:mb-4 md:text-lg lg:text-xl dark:text-gray-400">
                At PetsMarket Place, we understand how important your furry
                friends are to you. That&apos;s why we&apos;re dedicated to
                providing the best selections of pet products and accessories on
                the market, from toys and treats to grooming supplies and health
                products.
              </p>

              <btn className="inline-flex rounded-full items-center justify-center px-5 mr-auto py-3 text-lg font-medium text-center mb-4 text-gray-700 border-4 border-gray-300   focus:ring-2 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800  hover:bg-gray-100 hover:text-blue-700">
                <a href="/shop/category/pet-supplies/">Go To Shop</a>
              </btn>
            </div>

            <div className=" lg:col-span-6 justify-center flex xl:flex 2xl:h-full  max-h-almost-screen">
              <Image
                className="xl:h-full"
                src="https://images.unsplash.com/photo-1551730458-be400bef0161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                width={800}
                height={600}
                alt="majestic dog"
              />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 bg-no-repeat bg-cover bg-center bg-blend-multiply max-w-screen-2xl mx-auto px-6">
          <div className="relative py-4 2xl:px-0 lg:py-6  lg:px-6 mx-auto text-black  z-1 flex flex-col">
            <div className="grid gap-0 md:gap-2 lg:pt-6 2xl:mt-0 lg:mt-0 md:grid-cols-2 lg:grid-cols-7 ">
              <div className="flex flex-col justify-items-center items-center shadow-lg lg:rounded-full bg-green-300 p-2 lg:hover:-translate-y-2 duration-500">
                <Image
                  src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL1_Dog"
                  className="rounded-full"
                  width={200}
                  height={200}
                  alt="dog"
                />

                <a
                  href="/shop/category/dog-supplies/"
                  className="mt-2 mb-4 inline-flex  p-0 bg-green-400 rounded-2xl items-center text-sm font-semibold text-primary-500 hover:underline "
                >
                  <button className="py-1.5  m-2 uppercase px-7 justify-center text-sm font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:outline-none  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    Dogs
                  </button>
                </a>
              </div>
              <div className="flex flex-col justify-items-center items-center shadow-lg lg:rounded-full bg-yellow-300 p-2 lg:hover:-translate-y-2 duration-500">
                <Image
                  src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL2_Cat"
                  className="rounded-full"
                  width={200}
                  height={200}
                  alt="cat"
                />
                <a
                  href="/shop/category/cat-supplies/"
                  className="mt-2 mb-4 inline-flex  p-0 bg-yellow-400 rounded-2xl items-center text-sm font-semibold text-primary-500 hover:underline"
                >
                  <button className="py-1.5  m-2 uppercase px-7 justify-center text-sm font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:outline-none  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    Cats
                  </button>
                </a>
              </div>
              <div className="flex flex-col justify-items-center items-center shadow-lg lg:rounded-full bg-red-400 p-2 lg:hover:-translate-y-2 duration-500">
                <Image
                  src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL3_Fish"
                  className="rounded-full"
                  width={200}
                  height={200}
                  alt="dog"
                />
                <a
                  href="/shop/category/fish-supplies/"
                  className="mt-2 mb-4 inline-flex  p-0 bg-red-600  rounded-2xl items-center text-sm font-semibold text-primary-500 hover:underline"
                >
                  <button className="py-1.5  m-2 uppercase px-7 justify-center text-sm font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:outline-none  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    Fish
                  </button>
                </a>
              </div>
              <div className="flex flex-col justify-items-center items-center shadow-lg lg:rounded-full bg-blue-400 p-2 lg:hover:-translate-y-2 duration-500">
                <Image
                  src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL4_Bird"
                  className="rounded-full"
                  width={200}
                  height={200}
                  alt="bird"
                />
                <a
                  href="/shop/category/bird-supplies/"
                  className="mt-2 mb-4 inline-flex  p-0 bg-blue-600  rounded-2xl items-center text-sm font-semibold text-primary-500 hover:underline"
                >
                  <button className="py-1.5  m-2 uppercase px-7 justify-center text-sm font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:outline-none  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    Birds
                  </button>
                </a>
              </div>
              <div className="flex flex-col justify-items-center items-center shadow-lg lg:rounded-full bg-orange-400 p-2 lg:hover:-translate-y-2 duration-500">
                <Image
                  src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL5_Reptile"
                  className="rounded-full"
                  width={200}
                  height={200}
                  alt="reptile"
                />
                <a
                  href="/shop/category/reptile-amphibian-supplies/"
                  className="mt-2 mb-4 inline-flex  p-0 items-center bg-orange-600 rounded-2xl text-sm font-semibold text-primary-500 hover:underline "
                >
                  <button className="py-1.5  m-2 uppercase px-7 justify-center text-sm font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:outline-none  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    Reptiles
                  </button>
                </a>
              </div>
              <div className="flex flex-col justify-items-center items-center shadow-lg lg:rounded-full  bg-amber-300 p-2 lg:hover:-translate-y-2 duration-500">
                <Image
                  src="https://i.pinimg.com/736x/26/78/bc/2678bc60b5cd20ed745ae0fba79d23dd.jpg"
                  className="rounded-full max-h-64"
                  width={200}
                  height={200}
                  alt="horse"
                />
                <a
                  href="/shop/category/horse-supplies/"
                  className="mt-2 mb-4 inline-flex  p-0 items-center bg-amber-400 rounded-2xl text-sm font-semibold text-primary-500 hover:underline "
                >
                  <button className="py-1.5  m-2 uppercase px-7 justify-center text-sm font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:outline-none  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    Horses
                  </button>
                </a>
              </div>
              <div className="flex flex-col justify-items-center items-center shadow-lg lg:rounded-full bg-purple-400 p-2 lg:hover:-translate-y-2 duration-500">
                <Image
                  src="https://s7d2.scene7.com/is/image/PetSmart/WEB-1178113-Jan22_DEAL6_SmPet"
                  className="rounded-full"
                  width={200}
                  height={200}
                  alt="small pets"
                />
                <a
                  href="/shop/category/small-animal-supplies/"
                  className="mt-2 mb-4 inline-flex  p-0 items-center bg-purple-600 rounded-2xl text-sm  font-semibold text-primary-500 hover:underline "
                >
                  <button className="py-1.5  m-2 uppercase px-2 justify-center text-sm font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:outline-none  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    <p className="whitespace-nowrap">Small Animals</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Animal news */}
        <section className="bg-white dark:bg-gray-900 max-w-screen-2xl mx-auto px-6 ">
          <div className="py-8 px-0  mx-auto max-w-screen-2xl sm:py-8 lg:px-0">
            <div className="mx-auto max-w-screen-2xl text-left">
              <h2 className="mb-6 text-4xl tracking-tight text-gray-800 dark:text-white">
                Best Picks
              </h2>
            </div>
            <div className="grid gap-6 mb-16  lg:grid-cols-5">
              {!isEmpty(data?.productTags?.nodes)
                ? data?.productTags?.nodes.map((tag, index) => {
                    return (
                      <article
                        key={index}
                        className="border-1 p-3  justify-center content-center flex-col flex"
                      >
                        <h2 className="my-1 text-2xl  text-center tracking-tight text-gray-900 dark:text-white capitalize">
                          <a href={tag?.uri}>{tag?.name}</a>
                        </h2>
                        <div
                          className="prose-headings:font-normal text-center prose-h3:text-sm text-gray-500 my-2 mb-4 max-w-none select-none"
                          dangerouslySetInnerHTML={{
                            __html: sanitize(tag?.roundupFields?.hero),
                          }}
                        />
                        <a className="mx-auto" href={tag.uri}>
                          <div className="py-2 cursor-pointer mt-auto my-1 uppercase px-7 justify-center text-sm font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700  focus:outline-none  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                            Read more
                            <svg
                              className="ml-2 w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </article>
                    );
                  })
                : null}
            </div>
          </div>
        </section>
        {/* Product box one */}
        <section className="bg-gradient-to-tq  dark:bg-gray-800 max-w-screen-2xl 2xl:px-5 mx-auto">
          <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-6 lg:pb-2 lg:px-2">
            <div className="mx-auto max-w-screen-2xl text-left">
              <h2 className="mb-6 text-4xl tracking-tight text-gray-800 dark:text-white">
                Product Categories
              </h2>
            </div>
            <div className="grid gap-6 lg:gap-0  md:grid-cols-3 lg:grid-cols-6 sm:grid-cols-2 justify-center">
              {!isEmpty(data?.productTaxonomies?.nodes)
                ? data?.productTaxonomies?.nodes.map((tag, index) => {
                    return (
                      <div
                        className="p-3 pb-3 max-w-sm bg-white rounded-none  dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                        key={index}
                      >
                        {!isEmpty(
                          tag.products?.nodes[0]?.single_product_acf
                            ?.productImageMainUrl
                        ) ? (
                          <div className="2xl:max-h-72 flex flex-col bg-white">
                            <Image
                              src={tag.products?.nodes[0]?.single_product_acf?.productImageMainUrl?.replace(
                                ".jpg",
                                "._AC_UL320.jpg"
                              )}
                              className="m-auto h-56 lg:h-44 2xl:max-h-72"
                              width={250}
                              height={250}
                              objectFit="contain"
                              alt={tag?.name}
                            />
                            <a href={tag?.uri}>
                              <h5 className=" py-3 px-2 font-medium  tracking-tight text-gray-900  text-center   hover:text-blue-700">
                                {tag?.name}
                              </h5>
                            </a>
                          </div>
                        ) : null}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </section>

        {/* <section className="bg-white dark:bg-gray-900 px-6">
          <div className="py-8  mx-auto max-w-screen-2xl lg:py-16 lg:px-0">
            <div className="mx-auto max-w-screen-2xl text-left mb-8 lg:mb-8">
              <h2 className="mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white">
                Featured Product Reviews
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <article className=" bg-white  dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Image
                    className="mb-2 "
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                    alt="office laptops"
                    width={300}
                    height={200}
                    objectFit="contain"
                  />
                </a>

                <h2 className="my-1 text-2xl  tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Our first project with React</a>
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="font-medium dark:text-white">
                    <div>Sofia McGuire</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section> */}

        <section className="bg-white dark:bg-gray-900 ">
          <div className="grid gap-16 py-8 px-6 mx-auto max-w-screen-2xl lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="text-gray-700 sm:text-lg dark:text-gray-400 select-none">
              <h2 className="mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white">
                We share your deep love for animals
              </h2>
              <p className="mb-2 md:text-lg text-gray-700 dark:text-gray-400">
                Welcome to PetsMarket Place, the premier online destination for
                all your pet-related needs. Whether you&apos;re a proud pet
                owner or simply an animal lover, you&apos;ll find everything you
                need right here in one convenient place.
              </p>
              <p className=" md:text-lg mb-2  text-gray-700 dark:text-gray-400">
                But PetsMarket Place is more than just a pet store. We&apos;re
                also a trusted source of expert animal advice and information.
                Our team of dedicated professionals is always on hand to provide
                you with the knowledge and support you need to make informed
                decisions about your pets&apos; health and well-being. Whether
                you&apos;re looking for advice on nutrition, training, or
                medical care, we&apos;re here to help.
              </p>

              <p className=" md:text-lg mt-2 text-gray-700 dark:text-gray-400">
                So whether you&apos;re shopping for your pets or seeking expert
                advice, we invite you to explore the many resources and products
                available at PetsMarket Place. We&apos;re confident you&apos;ll
                find everything you need to keep your furry friends happy and
                healthy. <br />
                <br />
                <span className="text-xl">
                  Thanks for choosing PetsMarket Place - your one-stop shop for
                  all your pet needs and expert animal advice.
                </span>
              </p>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex flex-col items-center pb-8 sm:flex-row select-none">
                <Image
                  className="mx-auto mb-4 w-36 h-36 rounded-full sm:ml-0 sm:mr-6"
                  src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80"
                  alt="Benjamin Puginton - Pug with an attitude"
                  width={200}
                  height={200}
                  objectFit="cover"
                />
                <div className="text-center sm:text-left ml-4">
                  <h3 className="text-xl  tracking-tight text-gray-900 dark:text-white">
                    <p>Benjamin Puginton</p>
                  </h3>
                  <span className="text-gray-700 dark:text-gray-400">
                    CEO/Co-founder
                  </span>
                  <p className="mt-2 mb-4 max-w-sm  text-gray-700 dark:text-gray-400">
                    A top dog. Just looking to make an impact in the world of
                    animal Products.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center pt-8 pb-8 sm:flex-row">
                <Image
                  className="mx-auto mb-4 w-36 h-36 rounded-full sm:ml-0 sm:mr-6"
                  src="https://images.unsplash.com/photo-1589652739890-77a7733b8a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Pamela Pomerian - Cute dog with glasses"
                  width={200}
                  height={200}
                  objectFit="cover"
                />
                <div className="text-center ml-4 sm:text-left">
                  <h3 className="text-xl  tracking-tight text-gray-900 dark:text-white">
                    <p>Pamela Pomerian</p>
                  </h3>
                  <span className="text-gray-700 dark:text-gray-400">
                    CTO/Co-founder
                  </span>
                  <p className="mt-2 mb-4 max-w-sm  text-gray-700 dark:text-gray-400">
                    With years of experience as a vetenarian assistant and
                    patient. Pamela knows what is up when it comes to caring for
                    your animals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
export async function getStaticProps(context) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/",
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

  return handleRedirectsAndReturnData(defaultProps, data, errors, "page");
}
