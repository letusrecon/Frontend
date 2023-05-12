import Link from "next/link";
import styles from "./Sidebar.module.css";
import { MdOutlineDashboard, MdOutlineManageSearch } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { BsQrCodeScan } from "react-icons/bs";
import { GrVulnerability } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div>
      <nav className={styles.sidebar_nav}>
        <ul className={styles.sidebar_ul}>
          <li className={styles.sidebar_li}>
            <Link className={styles.sidebar_link} href="/Dashboard">
              <MdOutlineDashboard className={styles.sidebar_icon} /> Dashboard
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link className={styles.sidebar_link} href="/target_info">
              <TbTargetArrow className={styles.sidebar_icon} />
              Target Info
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link className={styles.sidebar_link} href="/subdomain_scan">
              <BsQrCodeScan className={styles.sidebar_icon} /> Subdomains Scan{" "}
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link className={styles.sidebar_link} href="/port_discovvery">
              <MdOutlineManageSearch />
              Ports Discovery{" "}
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link className={styles.sidebar_link} href="/Vulnerabilities">
              <GrVulnerability className={styles.sidebar_icon} />
              Vulnerabilities
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link className={styles.sidebar_link} href="/Urls">
              <AiOutlineLink className={styles.sidebar_icon} />
              URLS
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link className={styles.sidebar_link} href="/Tools">
              <BsTools />
              Tools
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link className={styles.sidebar_link} href="/support_ticket">
              <span className={styles.icon_span}>
                <IoTicketOutline className={styles.sidebar_icon} />
              </span>
              Support Ticket
            </Link>
          </li>
        </ul>
        <div>Sign Out</div>
      </nav>
    </div>
  );
}
