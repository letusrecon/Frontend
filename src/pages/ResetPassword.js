import styles from "./ResetPassword.module.css";
import { useState } from "react";
import Image from "next/image";


export default function ResetPassword() {

    const [enteredResetEmail, setEnteredResetEmail] = useState('')

    const resetPasswordSubmitHandler =(e)=>{
        e.preventDefault()

        if(enteredResetEmail === ''){
            return
        }

    }
  return (
    <div className={styles.reset_password_main_container}>
      <form
        className={styles.reset_password_form}
        onSubmit={resetPasswordSubmitHandler}
        action=""
      >
        <div className={styles.reset_passw_logo_wrap}>
          <Image
            src="/assets/logo-removebg-preview.png"
            width="100"
            height="100"
            className={styles.reset_passw_logo}
            alt="letUsRecon"
          />
        </div>

        <h5 className={styles.reset_password_heading}>Reset Password</h5>
        <p className={styles.reset_password_text}>
          Input the Email Address associated to your account below, we will send
          a link to the email to create a new password for your account.
        </p>
        <input
          type="email"
          placeholder="Input Your email Address
        "
          className={styles.reset_password_input}
          onChange={(e) => {
            setEnteredResetEmail(e.target.value);
          }}
        />

        <div>
          <button type="submit" className={styles.reset_password_action_btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
