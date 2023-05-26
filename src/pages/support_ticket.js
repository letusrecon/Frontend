import Layout from "@/Components/Layout";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function support() {
  return (
    <Layout>
      <div className="px-5 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10">
        <div className="flex flex-col mb-8 sm:flex-col  md:flex-row  
        lg:flex-row  lg:items-center lg:justify-between">
          <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0">
            <div className="">
              <h1 className="text-slate-100 text-1xl"><b>Create Ticket</b></h1>
              <h2 className="text-cyan-500">Fireeye.com</h2>
            </div>
          </div>

          <div className="flex ">
            <form action="" className="mr-8 mt-3">
              <input
                type="text"
                placeholder="Example.com"
                className="rounded-lg border py-1 px-6 w-4/3 bg-transparent "
              />
            </form>
            <div>
              <CgProfile className="text-2xl mx-auto text-slate-100" />
              <Link className="text-slate-100" href="/profile">
                My profile
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="lg:px-12">
          <div className="lg:px-12">
            <div className="lg:px-12"> */}
              <form className="">
                <div className="grid lg:grid-cols-8 lg:gap-8 mb-6">
                  <div className="w-full lg:col-span-3 mb-6 md:mb-0">
                    <label
                      className="block tracking-wide text-white font-bold mb-1 text-lg"
                      for="grid-subject"
                    >
                      Subject
                    </label>
                    <input
                      className="appearance-none block w-full bg-transparent 
                      text-white border border-white rounded-xl py-2 px-2 leading-tight 
                      focus:outline-none focus:bg-transparent"
                      id="grid-first-name"
                      type="text"
                      placeholder="type here..."
                    />
                  </div>
                  <div className="w-full lg:col-span-3 sm:mt-5 lg:mt-0">
                    <label
                      className="block tracking-wide text-lg text-white font-bold mb-1"
                      for="grid-priority"
                    >
                      Priority
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-transparent 
                        border border-white text-white py-2 px-2 rounded-xl 
                        leading-tight focus:outline-none focus:bg-transparent 
                        focus:border-gray-500"
                        id="grid-state"
                      >
                        <option>--</option>
                        <option>--</option>
                        <option>--</option>
                      </select>
                      <div
                        className="pointer-events-none absolute inset-y-0 
                        right-0 flex items-center px-2 text-white"
                      >
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 
                            10.828 5.757 6.586 4.343 8z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6 grid lg:grid-cols-8">
                  <div className="lg:col-span-6">
                    <label
                      className="block text-white font-bold mb-2 text-lg"
                      for="grid-description"
                    >
                      Description
                    </label>
                    <textarea
                      rows="8"
                      className="appearance-none block w-full bg-transparent 
                      text-white border border-gray-200 rounded-xl py-3 px-4 leading-tight 
                      focus:outline-none focus:bg-transparent focus:border-gray-500"
                      id="grid-description"
                      type="text"
                      placeholder="type here..."
                    />
                  </div>
                </div>
                <div className="mb-6 grid lg:grid-cols-8">
                  <div className="lg:col-span-6">
                    <label
                      className="block text-white font-bold text-lg mb-1"
                      for="grid-related-attachment"
                    >
                      Related Attachment
                    </label>
                    <p className="text-white text-base mb-4">
                      File types Supported: Only JPG & PNG format are allowed
                    </p>
                    <div className="flex items-center justify-center w-full">
                      <label
                        for="dropzone-file"
                        className="flex flex-col items-center 
                        justify-center w-full h-64 border border-white rounded-xl 
                        cursor-pointer bg-transparent dark:hover:bg-[bray-800] 
                        dark:bg-gray-700 hover:bg-[#222222] dark:border-gray-600 
                        dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="w-20 h-20 mb-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 
                              0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-white dark:text-gray-400">
                            <span className="font-semibold text-lg">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    className="bg-[#63C0D2] hover:bg-[#63C0D2] focus:shadow-outline
                    focus:outline-none text-lg text-black py-2 px-10 mb-6 rounded-xl"
                    type="button"
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            {/* </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
}
