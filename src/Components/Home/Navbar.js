import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink} from "react-scroll";

export default function Navbar() {
  const [isShowNav, setShowNav] = useState(false);

  const toggleHandler = () => {
    setShowNav(!isShowNav);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_logo_wrap}>
        <Link href="/">
          <Image
            src="/assets/logo-removebg-preview.png"
            width={180}
            height={125}
            className={styles.nav_logo}
            alt="logo"
          />
        </Link>
      </div>

      <div className={styles.nav_inner_flex_wrap}>
        <div
          className={` ${styles["nav_link_wrap"]}  ${
            isShowNav && styles.expanded
          } `}
        >
          <ScrollLink
            className={styles.link}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="services"
          >
            Features
          </ScrollLink>
          <ScrollLink
            className={styles.link}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="pricing"
          >
            Pricing
          </ScrollLink>
          <ScrollLink
            className={styles.link}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="contact"
          >
            Contact
          </ScrollLink>

          <Link className={styles.link} href="/Login">
            Login
          </Link>
        </div>

        <div>
          <Link href="/Register">
            <button className={styles.action_btn}>Get started</button>
          </Link>
        </div>
      </div>

      <FontAwesomeIcon
        onClick={toggleHandler}
        className={styles.toggle_icon}
        icon={faBars}
      />
    </nav>
  );
}
