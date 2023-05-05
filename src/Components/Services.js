import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import styles from "./Services.module.css";
import { MdDashboardCustomize, MdContactSupport } from "react-icons/md";
import {TbSettingsAutomation} from 'react-icons/tb'
import {FiSearch} from 'react-icons/fi'
import {BiAnalyse} from 'react-icons/bi'
import {FaTools} from 'react-icons/fa'


export default function Services() {
  return (
    <div className={styles.service_main_wrap}>
      <div className={styles.service_overview_wrap}>
        <h2 className={styles.service_overview_title}>
          The Ultimate Reconnaissance Solution
        </h2>
        <p className={styles.service_overview_desc}>
          Upgrade your bug bounty game with our automated reconnaissance tool.
          Save time and effort by eliminating manual recon and uncover hidden
          vulnerabilities quickly.
        </p>
      </div>

      <div className={styles.service_flex_container}>
        <div className={styles.service_inner_container}>
          <MdDashboardCustomize className={styles.service_icon} />

          <h4 className={styles.service_inner_container_title}>
            User-Friendly Dashboard & Interface
          </h4>
          <p className={styles.service_inner_container_desc}>
            Effortlessly navigate the online landscape with our easy-to-use
            dashboard, offering clear overviews of scans, subdomains, and
            crucial metrics designed for users.
          </p>
        </div>

        <div className={styles.service_inner_container}>
          {/* <FontAwesomeIcon className={styles.service_icon} icon={faServer} /> */}

          <TbSettingsAutomation className={styles.service_icon} />

          <h4 className={styles.service_inner_container_title}>
            Automated Weakness Detection
          </h4>
          <p className={styles.service_inner_container_desc}>
            Receive comprehensive reports on potential weaknesses, enabling you
            to proactively find and report vulnerabilities in the systems and
            applications of your target.
          </p>
        </div>
        <div className={styles.service_inner_container}>
          <FiSearch className={styles.service_icon} />

          <h4 className={styles.service_inner_container_title}>
            In-Depth Asset Exploration
          </h4>
          <p className={styles.service_inner_container_desc}>
            Discover hidden web assets and potential attack surfaces using a
            powerful asset exploration feature, providing you with a complete
            understanding of the target.
          </p>
        </div>
      </div>

      {/* Row 2 starts  */}

      <div className={styles.service_flex_container}>
        <div className={styles.service_inner_container}>
          <BiAnalyse className={styles.service_icon} />
          <h4 className={styles.service_inner_container_title}>
            Cutting-Edge Powerful Ports Discovery
          </h4>
          <p className={styles.service_inner_container_desc}>
     identifying open ports and services to pinpoint potential entry points in web assets. Discover all ports using an efficient port scanning solution.
          </p>
        </div>

        <div className={styles.service_inner_container}>
          <FaTools className={styles.service_icon} />
          <h4 className={styles.service_inner_container_title}>
            All-Inclusive Reconnaissance Toolkit{" "}
          </h4>
          <p className={styles.service_inner_container_desc}>
            Optimise your reconnaissance process with an integrated toolkit for
            subdomain enumeration, directory brute-forcing, and concealed
            parameter detection.
          </p>
        </div>
        <div className={styles.service_inner_container}>
          <MdContactSupport className={styles.service_icon} />
          <h4 className={styles.service_inner_container_title}>
            Cost-Effective Pricing and 24/7 Support
          </h4>
          <p className={styles.service_inner_container_desc}>
            plans with exceptional service, tailored for users. Round-the-clock
            support ensures you receive the help you need when seeking
            vulnerabilities.
          </p>
        </div>
      </div>
    </div>
  );
}
