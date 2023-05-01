import Link from 'next/link';
import Image from 'next/image';
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.main_login_container}>
      <div className={styles.login_form_col}>
        <form className={styles.login_form} action="">
          <h1 className={styles.login_heading}> Sign in</h1>
        

          <div className={styles.login_input_wrap}>
            <label className={styles.login_label} htmlFor="email">
              Email
            </label>
            <input name="email" className={styles.login_input} type="text" />
          </div>

          <div className={styles.login_input_wrap}>
            <label className={styles.login_label} htmlFor="password">
              Password
            </label>
            <input
              name="password"
              className={styles.login_input}
              type="password"
            />
          </div>


          <div className={styles.login_help_links_wrap}>
            <p className={styles.login_text}>
              Forgot Password ?{" "}
              <Link className={styles.login_links} href="/">
                Click here
              </Link>{" "}
             
            </p>

            <div className={styles.login_action_btn_wrap}>
              <button className={styles.login_action_btn}>Sign in</button>
            </div>
            <p className={styles.login_text}>
              You don't have an account ?{" "}
              <Link className={styles.login_links} href="/Register">
                Create an account here
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>

      <div className={styles.login_img_col}>
        <Image src="/assets/Hacklatest.jpg" width="930" height="1000" alt="login"/>
      </div>
    </div>
  );
}
