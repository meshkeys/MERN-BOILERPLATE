import React from 'react';
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { FormGroup, FormControl, Button } from "react-bootstrap"

function StudentForm(props) {

        const validationSchema = Yup.object().shape({
         name: Yup.string().required("Required"),
         email: Yup.string().email("you have entered an invalid email address").required("Required"),
        rollno: Yup.number().positive("invalid roll number").integer("invalid roll number").required("Required"),  
        });

        console.log(props);

  return (
    <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
            <Form>
            <FormGroup>
                <Field name="name" type="text" className="form-control"/>
                <ErrorMessage name="name" className='d-block invlaid-feedback' component='span'/>
                </FormGroup>  
                <FormGroup>
                <Field name="email" type="text" className="form-control"/>
                <ErrorMessage name="email" className='d-block invlaid-feedback' component='span'/>
                </FormGroup> 
                <FormGroup>
                <Field name="rollno" type="text" className="form-control"/>
                <ErrorMessage name="name" className='d-block invlaid-feedback' component='span'/>
                </FormGroup> 
                <Button variant="danger" size="lg" block="block" type="submit">{props.children}</Button>
            </Form>
        </Formik>
        </div>
  )
}

export default StudentForm