export default function login_validate(values){

    const errors = {}

    if (!values.email) {
      errors.email = "An Email Address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }



    // password validation

    if(!values.password){
        errors.password = " A Password is required"
    }else if (values.password.length < 8 || values.password.length > 20) 
    {
        errors.password = "Password must be at least 8 characters and less than 20 characters long"
    }


    return errors
}



export function register_validate (values){
  const errors = {};

  if (!values.email) {
    errors.email = "An email address is required";
  } else if (values.email.includes(" ")) {
    errors.email = "Invalid Email";
  }

  //  Validate password
  if (!values.password) {
    errors.password = "A password is required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "Password must be at least 8 characters and less than 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  // Confirm password


  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required!"
  }else if (values.password !== values.confirmPassword){
    errors.confirmPassword = 'Passwords does not match!'
  }
  
  return errors



}