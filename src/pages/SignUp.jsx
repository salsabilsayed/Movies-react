import React, {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { Form} from "react-bootstrap";
import { useFormik } from "formik";
import AuthContext from "../Auth/auth-context";
import Error from "../component/Error";
import * as Yup from 'yup';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './auth.css';

const SignUp = () => {

  let navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [ ageError, setAgeError ] = useState(false);
  const [ emailError, setEmailError ] = useState(false);

    const initialValues = {
        name: "",
        age: "",
        email: "",
        password: "",
      }

    const onSubmit = (values) => {
        console.log(values);
        axios.post('https://task-app-nodee.herokuapp.com/users',values)
        .then(res=>{
          console.log(res.data);
          const token = res.data.token;
          localStorage.setItem('token',token);
          authContext.login(token);
          setAgeError(false);
          setEmailError(false);
          formik.resetForm();
          navigate('/');
        })
        .catch(error =>{

          if (error.response.data.errors?.age.name === 'ValidatorError') {
            setAgeError(true);
          } 
          if (error.response.data.code === 11000) {
            setEmailError(true);
          } 
          
          console.log('Error', error.message);
          
        })
    }

    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),

      email: Yup.string().email('Invalid email').required('Required'),
      
      password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .required('Required'),
    });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount:true
  });

  return (
    <section className="auth">
      <Form className="containerForm py-5" onSubmit={formik.handleSubmit}>
        <h3 className="title text-center mb-4">Sign up</h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            {...formik.getFieldProps('name')}
            className={`${formik.touched.name && formik.errors.name && "is-invalid"} 
            ${formik.touched.name && !formik.errors.name && "is-valid"}
            `}
          />
        </Form.Group>
        {/* name error message */}
        {formik.touched.name 
        && formik.errors.name 
        && <Error>{formik.errors.name}</Error>}

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            type="number"
            placeholder="Enter your age"
            name="age"
            {...formik.getFieldProps('age')}
            className={`${formik.touched.age && ageError && "is-invalid"} 
            ${formik.touched.age && !ageError&& "is-valid"}
            `}
          />
        </Form.Group>
        {/* age backend error */}
        {ageError && <Error>Age must be a positive number</Error>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            {...formik.getFieldProps('email')}
            className={`${formik.touched.email && formik.errors.email && "is-invalid"} 
            ${formik.touched.email && !formik.errors.email && "is-valid"}
        `}
          />
        </Form.Group>

        {/* email error messages */}
        {formik.touched.email
         && formik.errors.email 
         && <Error>{formik.errors.email}</Error>}

         {/* backend email error */}
         {emailError && <Error>Email already exist</Error>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            {...formik.getFieldProps('password')}
            className={`${formik.touched.password && formik.errors.password && "is-invalid"} 
            ${formik.touched.password && !formik.errors.password && "is-valid"}`}
          />
        </Form.Group>
        {/* password error messages */}
        {formik.touched.password && 
        formik.errors.password && 
        <Error>{formik.errors.password}</Error>}

        <button 
        type="submit" 
        className="button"
        disabled={!formik.isValid }>
          <span className="mx-2">Register</span>
          {formik.isSubmitting && <FontAwesomeIcon icon={faSpinner} className="fa-spin"/>}
        </button>
        
      </Form>
      </section>
  );
};

export default SignUp;
