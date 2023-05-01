import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.css"
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Footer (){
 const cuurentDate = ()=>{
    return new Date().getFullYear();
    
 }

    return (
      <footer className={styles.footer}>
        <hr className={styles.hr} />
        <div className={styles.inner_footer_main_wrap}>
          <div className={styles.footer_inner_col}>
            <h1 className={styles.footer_main_heading}>LetUsRecon</h1>

            <p className={styles.footer_text}>
              Say goodbye to boring manual recon, and hello to lightning-fast
              results that'll make your competitors green with envy.So go ahead
              and give it a try - LetUsRecon, so you don't have to!
            </p>
          </div>

          <div className={styles.footer_inner_col}>
            <h1 className={styles.footer_inner_inner_heading}>Company</h1>
            <ul className={styles.inner_footer_inner_col_ul}>
              <li className={styles.footer_inner_col_li}>
                <Link className={styles.footer_link} href="/">
                  Terms and Conditions
                </Link>
              </li>
              <li className={styles.footer_inner_col_li}>
                <Link className={styles.footer_link} href="/">
                  Privacy Policy
                </Link>
              </li>
              <li className={styles.footer_inner_col_li}>
                <Link className={styles.footer_link} href="/">
                  Shipping Policy
                </Link>
              </li>
              <li className={styles.footer_inner_col_li}>
                <Link className={styles.footer_link} href="/">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer_inner_col_2}>
            <h1 className={styles.footer_inner_inner_heading}>Features</h1>
            <ul className={styles.inner_footer_inner_col_ul}>
              <li className={styles.footer_inner_col_li}>
                <Link className={styles.footer_link} href="/">
                  Services
                </Link>
              </li>
              <li className={styles.footer_inner_col_li}>
                <Link className={styles.footer_link} href="/">
                  Security
                </Link>
              </li>
              <li className={styles.footer_inner_col_li}>
                <Link className={styles.footer_link} href="/">
                  Support System
                </Link>
              </li>
              <li className={styles.footer_inner_col_li}>
                <Link className={styles.footer_link} href="/">
                  How to start
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.copy_right_wrap}>
          <p className={styles.copy_right_text}>
            © {cuurentDate()} LetUsRecon - All Rights Reserved
          </p>
          <div>
            <a href="https://twitter.com/LetusRecon " target="_blank">
             
              <FaTwitter className={styles.footer_icon} />
            </a>
            <a c href=": https://www.instagram.com/letusrecon/ " target="_blank">
           
              <FaInstagram className={styles.footer_icon} />
            </a>

            <a href=" https://discord.gg/Wcg7T8hv" target="_blank">
             
              <FaDiscord className={styles.footer_icon} />
            </a>
          </div>
        </div>
      </footer>
    );
}