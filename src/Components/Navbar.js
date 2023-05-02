import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Navbar() {
  const [isShow, setShow] = useState(false);

  const toggleHandler = () => {
    console.log("working");
    setShow(true)
  
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_logo_wrap}>
        <Image
          src="/assets/logo-removebg-preview.png"
          width={180}
          height={125}
          className={styles.nav_logo}
          alt="logo"
        />
      </div>

      <div className={styles.nav_inner_flex_wrap}>
        
          <div className={ ` ${styles['nav_link_wrap']} ${isShow && <p> hello</p> }  `}>
            <Link className={styles.link} href="/">
              Docs
            </Link>
            <Link className={styles.link} href="/Docs">
              Features
            </Link>
            <Link className={styles.link} href="/">
              Pricing
            </Link>
            <Link className={styles.link} href="/">
              Contact
            </Link>
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
