import Layout from "@/Components/Layout";
import styles from "./Urls.module.css";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function Urls() {
  return (
    <Layout>
      <div className="px-8 py-12">
      <div className=" flex justify-between items-center  mb-5">
          <div className="">
            <div className="">
              <h1 className="text-slate-100 text-1xl">Resolved Domain</h1>
              <h2 className="text-cyan-500">Fireeye.com</h2>
            </div>
          </div>

          <div className="flex ">
            <form action="" className="mr-8 mt-3">
              <input
                type="text"
                placeholder="Example.com"
                className="rounded-xl border py-1 px-6 w-4/3 bg-transparent "
              />
            </form>
            <div>
              <CgProfile className="text-2xl mx-auto text-slate-100" />
              <Link className="text-slate-100" href="/">
                My profile
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end">
          <h2 className="text-[#5bb0c0] text-lg"><b>Include</b></h2>
          <form action="" className="ml-8">
                <input
                  type="text"
                  placeholder="type here"
                  className="rounded-xl border text-white py-1 px-6 w-2/3 bg-transparent"
                />
              </form>
        </div>
        <h3 className="text-white mb-6">
          <b>Results</b>
        </h3>

        <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-6 text-center">
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
        <div className="bg-[#141C1D] rounded-xl border border-[#3A4245] my-10 pb-12">
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
              http://test.php.vulnweb.com:80/redir.php?test=query'+OR+sqlspider
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
