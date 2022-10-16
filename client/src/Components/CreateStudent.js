import React, { useState, useEffect } from 'react'
import axios from "axios"
import StudentForm from './StudentForm'

function CreateStudent () {
    const [formValues, setFormValues] = useState({ name: "", email:"", rollno: "",})

    const onSubmit = studentObject => {
        axios.post("http://localhost:4000/students/create-student")
        .then(response =>{
            if(response.status === 200)
            alert('Student is successfully created')
            else Promise.reject()
        })
        .catch(err => alert('something went wrong'))
    }


  return (
        <StudentForm initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        Create Student
        </StudentForm>
    
  )
}

export default CreateStudent