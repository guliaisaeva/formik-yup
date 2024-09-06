import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = ()=>{
  console.log("submitted")
}
const BasicForm = () => {
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} =useFormik({
    initialValues:{
      email:"",
      age:"",
      password:"",
      confirmPassword:""
    },
    validationSchema:basicSchema,
    onSubmit
  })
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input onChange={handleChange} value={values.email} id="email" type="email" placeholder="Enter your email" onBlur={handleBlur} className={errors.email && touched.email?"input-error":""}/>
      <label htmlFor="age">Age</label>
      <input onChange={handleChange} value={values.age} id="age" type="number" placeholder="Enter your age" onBlur={handleBlur}/>
      <label htmlFor="password">Password</label>
      <input onChange={handleChange} value={values.password} id="password" type="password" placeholder="Enter your password" onBlur={handleBlur} />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input onChange={handleChange} value={values.confirmPassword} id="confirmPassword" type="password" placeholder="Confirm password" onBlur={handleBlur} />
  <button type="submit">Submit</button>
   </form>
  );
};
export default BasicForm;
