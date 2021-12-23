import React,{useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import AuthContext from "../Auth/auth-context";
import Error from '../component/Error';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './auth.css';

const Login = () => {

    const [ loginError, setLoginError ] = useState(false);
    const authContext = useContext(AuthContext);
    let navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
      }

      const onSubmit = (values) => {
        axios.post('https://task-app-nodee.herokuapp.com/users/login',values)
        .then(res=>{
          console.log(res.data);
          const token = res.data.token;
          localStorage.setItem('token',token);
          authContext.login(token);
          setLoginError(false);
          formik.resetForm();
          navigate('/')
        })
        .catch(error =>{
            if(error){
                setLoginError(true);
            }
        })
    }

      const validationSchema = Yup.object().shape({
  
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
      <section className='auth'>
        <Form className="containerForm py-5" onSubmit={formik.handleSubmit}>

          <h3 className='title text-center mb-4'>Login</h3>

            {/* error message */}

        {loginError && <Error>invalid email or password</Error>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            {...formik.getFieldProps('email')}
            className={`${((formik.touched.email && formik.errors.email) || loginError) && "is-invalid"} 
            ${formik.touched.email && !formik.errors.email && "is-valid"}
        `}
          />
        </Form.Group>

        {/* email error messages */}
        {formik.touched.email
         && formik.errors.email 
         && <Error>{formik.errors.email}</Error>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            {...formik.getFieldProps('password')}
            className={`${((formik.touched.password && formik.errors.password) || loginError) && "is-invalid"} 
            ${formik.touched.password && !formik.errors.password && "is-valid"}`}
          />
        </Form.Group>
        {/* password error messages */}
        {formik.touched.password && 
        formik.errors.password && 
        <Error>{formik.errors.password}</Error>}

        <button 
        type="submit" 
        className='button'
        disabled={!formik.isValid}>
          <span className="mx-2">Login</span>
          {formik.isSubmitting && <FontAwesomeIcon icon={faSpinner} className="fa-spin"/>}
        </button>
      </Form>
      </section>
    )
}

export default Login;
