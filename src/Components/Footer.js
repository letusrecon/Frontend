import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.css"

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
              The leading tool for easy and vbest Reconnaisance
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
                  Refundand Cancellation
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer_inner_col}>
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
        <hr className={styles.hr}/>
        <div className={styles.copy_right_wrap}>
          <p className={styles.copy_right_text}>
            © {cuurentDate()} LetUsRecon - All Rights Reserved
          </p>
          <div></div>
        </div>
      </footer>
    );
}