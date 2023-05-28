import Link from "next/link";
import styles from "./Sidebar.module.css";
import { MdOutlineDashboard, MdOutlineManageSearch } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineScan } from "react-icons/ai";
import { GrVulnerability } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import {AiOutlineLogout} from 'react-icons/ai'
import Image from "next/image";

export default function Sidebar() {
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
            <li className={styles.sidebar_li}>
              <span className={styles.icon_span}>
                <MdOutlineDashboard className={styles.sidebar_icon} />
              </span>

              <Link className={styles.sidebar_link} href="/Dashboard">
                Dashboard
              </Link>
            </li>
            <li className={styles.sidebar_li}>
              <TbTargetArrow className={styles.sidebar_icon} />
              <Link className={styles.sidebar_link} href="/target_info">
                Target Info
              </Link>
            </li>
            <li className={styles.sidebar_li}>
              <AiOutlineScan className={styles.sidebar_icon} />
              <Link className={styles.sidebar_link} href="/subdomain_scan">
                Subdomains Scan{" "}
              </Link>
            </li>
            <li className={styles.sidebar_li}>
              <MdOutlineManageSearch className={styles.sidebar_icon} />
              <Link className={styles.sidebar_link} href="/port_discovery">
                Ports Discovery{" "}
              </Link>
            </li>
            <li className={styles.sidebar_li}>
              <AiOutlineLink className={styles.sidebar_icon} />
              <Link className={styles.sidebar_link} href="/Vulnerabilities">
                Vulnerabilities
              </Link>
            </li>
            <li className={styles.sidebar_li}>
              <AiOutlineLink className={styles.sidebar_icon} />
              <Link className={styles.sidebar_link} href="/Urls">
                URLS
              </Link>
            </li>
            <li className={styles.sidebar_li}>
              <BsTools className={styles.sidebar_icon} />
              <Link className={styles.sidebar_link} href="/Tools">
                Tools
              </Link>
            </li>
            <li className={styles.sidebar_li}>
              <IoTicketOutline className={styles.sidebar_icon} />
              <Link className={styles.sidebar_link} href="/support_ticket">
                <span className={styles.icon_span}></span>
                Support Ticket
              </Link>
            </li>
          </ul>

          <div className="">
            <div className=" cursor-pointer hover:bg-[#3D3E3D] px-3 py-1 rounded-md flex bottom-4  fixed ">
              <AiOutlineLogout className="text-xl   mt-1 mr-5 text-slate-100 " />
              <h3 className="text-slate-100 text-xl font-semibold"> LOGOUT</h3>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
