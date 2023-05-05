import styles from "./ResetPassword.module.css";
import { useState } from "react";


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
      <form onSubmit={resetPasswordSubmitHandler} action="">
        <h2 className={styles.reset_password_heading}>Forgot password?</h2>
        <p className={styles.reset_password_text}>
          Input the Email Address associated to your account below, we will send a
          link to the email to create a new password for your account.
        </p>
        <input
          type="email"
          placeholder="Your email Address
        "
        className={styles.reset_password_input}
        onChange={(e) =>{setEnteredResetEmail(e.target.value)}}
        />

        <div>
          <button type="submit" className={styles.reset_password_action_btn}>Submit</button>
        </div>
      </form>
    </div>
  );
}
