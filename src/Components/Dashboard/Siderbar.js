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
    <div className="bg-[#232223]   w-[250px] h-14 md:h-screen fixed top-0 bottom-0">
      <div
        className="
          flex flex-col
          lg:overflow-y-auto
        
      "
      >
        <nav className={`${styles["sidebar_nav"]}`}>
          <Image
            src="/assets/logo-removebg-preview.png"
            width="150"
            height="140"
            alt="LetUsRecon"
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
        </nav>

        <div className="bg-[#3C3E3C] py-5 px-5 w-60 fixed  bottom-0">
          <div className="  text-center  justify-center  flex font-bold">
            <AiOutlineLogout className="text-2xl text-slate-100 mr-3" />
            <h3 className="text-slate-100 "> LOGOUT</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
