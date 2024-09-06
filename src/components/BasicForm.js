import { useFormik } from "formik";

const BasicForm = () => {
  const {value,handleBlur,handleChange} =useFormik({
    initialValues:{
      email:"",
      age:"",
      password:"",
      confirmPassword:""
    }
  })
  console.log(formik)
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input onChange={handleChange} value={values.email} id="email" type="email" placeholder="Enter your email" onBlur={formik.handleBlur}/>
      <label htmlFor="age">Age</label>
      <input onChange={handleChange} value={values.age} id="age" type="number" placeholder="Enter your age" onBlur={formik.handleBlur}/>
      <label htmlFor="password">Password</label>
      <input onChange={handleChange} value={values.password} id="password" type="password" placeholder="Enter your password" onBlur={formik.handleBlur} />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input onChange={handleChange} value={values.confirmPassword} id="confirmPassword" type="password" placeholder="Confirm password" onBlur={formik.handleBlur} />
  <button type="submit">Submit</button>
   </form>
  );
};
export default BasicForm;
