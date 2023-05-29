import Link from "next/link";
import styles from "./Sidebar.module.css";
import { MdOutlineDashboard, MdOutlineManageSearch } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineScan } from "react-icons/ai";
import { GrVulnerability } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
import {GiCyberEye} from 'react-icons/gi'
import { BsTools } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import {AiOutlineLogout} from 'react-icons/ai'
import Image from "next/image";
import { useRouter } from "next/router";

export default function Sidebar() {

  const router = useRouter()
  return (
    <div className="hidden bg-[#232223] sm:hidden md:block lg:block  w-[284px] h-14 md:h-screen fixed top-0 bottom-0">
      <div
        className="
        
   
        
      "
      >
        <nav className={`${styles["sidebar_nav"]}`}>
          <Image
            src="/assets/logo-removebg-preview.png"
            width="150"
            height="130"
            alt="LetUsRecon"
            className="h-23"
          />
          <ul className={styles.sidebar_ul}>
            <li className="  mb-4">
              <Link
                className={`flex   rounded-md  py-1 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
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
                className={`flex  rounded-md  py-1 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
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
                className={`flex   rounded-md  py-1 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
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
                className={`flex   rounded-md  py-1 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
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
                className={`flex   rounded-md  py-1 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
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
                className={`flex   rounded-md  py-1 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
                  router.pathname == "/Urls" ? styles["active"] : ""
                }  `}
                href="/Urls"
              >
                <span className="mr-2">
                  <AiOutlineLink className="text-slate-200  text-2xl" />
                </span>
                URLS
              </Link>
            </li>
            <li className=" mb-4">
              <Link
                className={`flex  rounded-md  py-1 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
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
                className={`flex  rounded-md  py-1 px-4  text-slate-200 hover:bg-[#63c0d2]  ${
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
            <div className=" cursor-pointer hover:bg-[#3D3E3D] px-3 py-2 rounded-md flex bottom-4  fixed ">
              <AiOutlineLogout className="text-xl   mt-1 mr-5 text-slate-100 " />
              <h3 className="text-slate-100 text-xl font-semibold"> LOGOUT</h3>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
