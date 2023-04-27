import Link from "next/link"
import styles from './Navbar.module.css'
import Image from "next/image";

export default function Navbar(){

    return (
      <nav className={styles.nav}>
        <div>
          <Image
            src="/assets/logo-removebg-preview.png"
            width={170}
            height={100}
          />
        </div>
        <div>
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
          <button className={styles.action_btn}>Get started</button>
        </div>
      </nav>  
    );

}