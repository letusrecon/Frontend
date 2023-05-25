import Layout from "@/Components/Layout";
import styles from "./Urls.module.css";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import {MdArrowDropDown } from 'react-icons/md'

export default function Urls() {
  return (
    <Layout>
      <div className="px-5 py-8 md:px-8 md:py-5 lg:py-5 lg:px-10">
        <div className="flex flex-col mb-8 sm:flex-col  md:flex-row  lg:flex-row  lg:items-center lg:justify-between">
          <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0">
            <div className="">
              <h1 className="text-slate-100 text-1xl">Resolved Domain</h1>
              <h2 className="text-cyan-500">Fireeye.com</h2>
            </div>
          </div>

          <div className="flex items-center ">
            <form action="" className="mr-8 mt-3">
              <input
                type="text"
                placeholder="Example.com"
                className="rounded-md border py-1 text-slate-200 px-6 w-4/3 bg-transparent "
              />
            </form>
            <div>
              <Link className="text-slate-100" href="/profile">
                <CgProfile className="text-2xl mx-auto text-slate-100" />
                My profile
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-20 lg:items-center">
          <div className="">
            <h3 className="text-slate-100 text-2xl  mb-4 lg:mb-0 mr-2">
              Result
            </h3>
          </div>

          <div className="flex flex-col sm:flex-col lg:flex-row">
            {/* <div className="  lg:mr-5">
              <h3 className="text-2xl mb-3 lg:mb-0 sm:mb-3 text-cyan-500">
                Include
              </h3>
            </div> */}

            <form action="" className=" mr-7  lg:mr-5 mb-4 lg:mb-0  ">
              <input
                type="text"
                placeholder="Type here"
                className="rounded-md border py-1 px-6 w-4/3 bg-transparent text-slate-100 mr-3 "
              />
            </form>

            <div className="">
              <button className="border rounded-md px-3 py-1 text-slate-100 flex ">
                Export{" "}
                <span className="ml-4">
                  <MdArrowDropDown className=" text-xl " />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 mt-8 sm:grid-cols-1 gap-6 text-center">
          {/* card start here */}
          <div
            className="bg-[#141C1D] rounded-xl text-[#5bb0c0] 
          hover:text-white hover:bg-[#5bb0c0] border border-[#3A4245] text-center px-12 py-4"
          >
            <button>
              <h1 className="text-white text-xl mb-2">
                <b>SSRF</b>
              </h1>
              <h3 className="text-lg mb-2">7 results</h3>
            </button>
          </div>
          {/* card ends here */}

          {/* card start here */}
          <div
            className="bg-[#141C1D] rounded-xl
          text-white bg-[#5bb0c0] border border-[#3A4245] text-center px-12 py-4"
          >
            <button>
              <h1 className="text-white text-xl mb-2">
                <b>IDOR</b>
              </h1>
              <p className="text-lg mb-2">10 results</p>
            </button>
          </div>
          {/* card ends here */}

          {/* card start here */}
          <div
            className="bg-[#141C1D] rounded-xl text-[#5bb0c0] 
          hover:text-white hover:bg-[#5bb0c0] border border-[#3A4245] text-center px-8 py-4"
          >
            <button>
              <h1 className="text-white text-xl mb-2">
                <b>Redirect</b>
              </h1>
              <p className="text-lg mb-2">15 results</p>
            </button>
          </div>
          {/* card ends here */}

          {/* card start here */}
          <div
            className="bg-[#141C1D] rounded-xl text-[#5bb0c0] 
          hover:text-white hover:bg-[#5bb0c0] border border-[#3A4245] text-center px-2 py-4"
          >
            <button>
              <p className="text-white text-xl mb-2">
                <b>File Inclusions</b>
              </p>
              <p className="text-lg mb-2">20 results</p>
            </button>
          </div>
          {/* card ends here */}

          {/* card start here */}
          <div
            className="bg-[#141C1D] rounded-xl text-[#5bb0c0] 
          hover:text-white hover:bg-[#5bb0c0] border border-[#3A4245] text-center px-12 py-4"
          >
            <button>
              <h1 className="text-white text-xl mb-2">
                <b>Debug</b>
              </h1>
              <p className="text-lg mb-2">60 results</p>
            </button>
          </div>
          {/* card ends here */}
        </div>

        {/* table start here */}
        <div className="bg-[#141C1D] rounded-xl border border-[#3A4245] my-10 py-2">
          <div className="grid grid-cols-12 card_title rounded-t-xl text-white p-1">
            <b className="grid grid-cols-1">#</b>
            <p className="text-center col-start-2 col-span-11">
              <b>URLs Found</b>
            </p>
          </div>

          <hr className="solid"></hr>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">1</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com/redir.php?r=https://smils.ru/bitrix/redirect.php?goto=https://natureswayketo.net
            </p>
          </div>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">2</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com/redir.php?test=query%27
            </p>
          </div>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">3</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com:80/redir.php?test=query&apos+OR+sqlspider
            </p>
          </div>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">4</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com/showimage.php?file=
            </p>
          </div>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">5</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com/showimage.php?file=./picture/1.jpg
            </p>
          </div>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">6</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com/showimage.php?file=./picture/1.jpg&size=1607
            </p>
          </div>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">7</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com/showimage.php?file=./picture/2.jpg
            </p>
          </div>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">8</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com:80/redir.php?test=query'+OR+sqlspider
            </p>
          </div>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">9</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com/redir.php?test=query%27
            </p>
          </div>

          <div className="grid grid-cols-12 text-white m-2">
            <h3 className="grid grid-cols-1">10</h3>
            <p className="text-center col-start-2 col-span-11">
              http://test.php.vulnweb.com:80/redir.php?test=query'+OR+sqlspider
            </p>
          </div>
        </div>
        {/* end */}
      </div>
    </Layout>
  );
}
