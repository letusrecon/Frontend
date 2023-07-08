import Link from "next/link";
import styles from "./Sidebar.module.css";
import { MdOutlineDashboard, MdOutlineManageSearch } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineScan } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import {GiCyberEye} from 'react-icons/gi'
import { BsTools } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import {AiOutlineLogout} from 'react-icons/ai'
import Image from "next/image";
import { useRouter } from "next/router";
import {  signOut } from "next-auth/react";


export default function Sidebar({ isShowSideBar, onClickHandler }) {

  const handleSignOut = ()=>{
    signOut()
  }

  


  const router = useRouter();
  return (
    <div
      className={` ${
        isShowSideBar
          ? "w-full sm:-ms-0 ms-0 bg-[#232223] h-screen z-10 relative"
          : ""
      } bg-[#232223] -ms-80 lg:-ms-0  lg:w-[284px] lg:top-0  lg:h-screen md:h-screen fixed  `}
    >
      <div
        className="
        
   
        
      "
      >
        <nav className={`  px-3 sm:px-3 py-5 md:py-7  md:px-5 lg:px-5 :py-10`}>
          <Image
            src="/assets/logo-removebg-preview.png"
            width="150"
            height="130"
            alt="LetUsRecon"
            className="hidden sm:hidden md:block lg:block h-23"
          />
          <ul className={`styles['sidebar_ul'] py-1 sm:px-0 px-0 sm:py-2`}>
            <li className="  mb-4">
              <Link
                className={`flex   rounded-md  py-2 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
                  router.pathname == "/Dashboard" ? styles["active"] : ""
                }  `}
                href="/Dashboard"
              >
                <span className="mr-2">
                  <MdOutlineDashboard className="text-slate-200  text-2xl" />
                </span>
                Dashboard
              </Link>
            </li>
            <li className=" mb-4">
              <Link
                href="/target_info"
                className={`flex  rounded-md  py-2 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
                  router.pathname == "/target_info" ? styles["active"] : ""
                }  `}
              >
                <span className="mr-2">
                  <TbTargetArrow className="text-slate-200  text-2xl" />
                </span>
                Target
              </Link>
            </li>
            <li className=" mb-4">
              <Link
                className={`flex   rounded-md  py-2 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
                  router.pathname == "/subdomain_scan" ? styles["active"] : ""
                }  `}
                href="/subdomain_scan"
              >
                <span className="mr-2">
                  <AiOutlineScan className="text-slate-200  text-2xl" />
                </span>
                Subdomain Scans
              </Link>
            </li>
            <li className=" mb-4">
              <Link
                className={`flex   rounded-md  py-2 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
                  router.pathname == "/port_discovery" ? styles["active"] : ""
                }  `}
                href="/port_discovery"
              >
                <span className="mr-1">
                  <MdOutlineManageSearch className="text-slate-200  text-2xl" />
                </span>
                Port Discovery
              </Link>
            </li>
            <li className=" mb-4">
              <Link
                className={`flex   rounded-md  py-2 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
                  router.pathname == "/Vulnerabilities" ? styles["active"] : ""
                }  `}
                href="/Vulnerabilities"
              >
                <span className="mr-2">
                  <GiCyberEye className="text-slate-200  text-2xl" />
                </span>
                Vulnerabilities
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className={`flex   rounded-md  py-2 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
                  router.pathname == "/Urls" ? styles["active"] : ""
                }  `}
                href="/Urls"
              >
                <span className="mr-2">
                  <AiOutlineLink className="text-slate-200  text-2xl" />
                </span>
                URLs
              </Link>
            </li>
            <li className=" mb-4">
              <Link
                className={`flex  rounded-md  py-2 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
                  router.pathname == "/Tools" ? styles["active"] : ""
                }  `}
                href="/Tools"
              >
                <span className="mr-2">
                  <BsTools className="text-slate-200  text-2xl" />
                </span>
                Tools
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className={`flex  rounded-md  py-2 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
                  router.pathname == "/support_ticket" ? styles["active"] : ""
                }  `}
                href="/support_ticket"
              >
                <span className="mr-2">
                  <IoTicketOutline className="text-slate-200  text-2xl" />
                </span>
                Support Ticket
              </Link>
            </li>
          </ul>

          <div className="">
            <div className=" cursor-pointer hover:bg-[rgb(61,62,61)] px-6 sm:px-6 lg:px-3  md:px-3 sm:mt-8 lg:mt-0 md:mt-0 mt-8 py-2 rounded-md flex bottom-4 relative md:fixed lg:fixed ">
              <AiOutlineLogout className=" text-xl mr-2  sm:mr-2 md:mr-4 mt-1 lg:mr-5 text-slate-100 " />
              <button onClick={handleSignOut} className="text-slate-100 text-xl font-semibold"> LOGOUT</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
