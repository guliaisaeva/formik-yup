import React from 'react'
import { useField } from 'formik';


function CustomCheckbox({label,...props}) {
const [field,meta]=useField(props);

return (
<>
<div className='checkbox'>
<input {...field} {...props}
className={meta.touched && meta.error ?"input-error":""}/>
{meta.touched && meta.error && <div className='error'>{meta.error}</div>}
<span>I accept the terms of service. </span>
</div>
</>
  )
}

export default CustomCheckbox