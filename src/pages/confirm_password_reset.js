import React from 'react'
import { useFormik } from 'formik';
import Image from "next/image";
import styles from "./confirm_password_reset.module.css";
import axios from 'axios';
import { confirm_reset_password_validation } from '@/lib/Validate';
import { toast } from 'react-hot-toast';


export default function Confirm_password_reset() {

    const formik = useFormik({
        initialValues:{
          email:"",
          code: "",
         

        },

        validate: confirm_reset_password_validation,

        onSubmit
    })


    async function onSubmit(values){

     await axios
       .post(
         "https://dev-api.letusrecon.com/v1/auth/user/verify-password-recovery-code",
         {
           email: values.email,
           code: values.code,
         }
       )

       .then((res) => {
        if (res){
          toast.success('Recovery code verified successfully!')
        }
       })
       .catch((error) => {
        if(error){
          toast.error('Invalid recovery code or email')
        }
       });

    }



 return (
   <div className={styles.reset_password_main_container}>
     <form
       className={styles.reset_password_form}
       onSubmit={formik.handleSubmit}
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

       <h5 className={styles.reset_password_heading}>Confirm password Reset</h5>
       <p className={styles.reset_password_text}>
         To confirm your password reset, provide your email and the recovery code sent to your inbox.
       </p>

       <div>
         <input
           type="email"
           id="email"
           name="email"
           placeholder="JohnDoe@gmail.com
        "
           className={`${styles["reset_password_input"]} ${
             formik.errors.email && formik.touched.email ? styles.invalid : ""
           }`}
           onBlur={formik.handleBlur}
           value={formik.values.email}
           onChange={formik.handleChange}
         />
       </div>

       <div>
         <input
           type="text"
           id="code"
           name="code"
           placeholder="66488
        "
           onBlur={formik.handleBlur}
           className={`${styles["reset_password_input"]} ${
             formik.errors.code && formik.touched.code ? styles.invalid : ""
           }`}
           value={formik.values.code}
           onChange={formik.handleChange}
         />
       </div>

       <div>
         <button type="submit" className={styles.reset_password_action_btn}>
           Submit
         </button>
       </div>
     </form>
   </div>
 );
}
