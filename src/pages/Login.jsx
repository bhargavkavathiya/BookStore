import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import userService from "../service/user.service";
import { toast } from "react-toastify";
import authService from "../service/auth.service";
function Login() {

    const validate=Yup.object({
        email:Yup.string().email('Invalid email').required('Email is required'),
        password:Yup.string().min(6, "Must be atleast 6 character").required('Password must require'),
    })

    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema:validate,
        onSubmit:(values)=>{
            alert(JSON.stringify(values))

            authService.login(values).then((res)=>{
                toast.success('Request send successfully ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
        }
    });
    return (
        <>
            <Header />
            <h2 style={{ textAlign: "center" }}>Login or Create an Account</h2>
            <div className="log_maindiv">
                <div className="log_subdiv1">
                    <h4>New Customer</h4>
                    <hr/>
                    <ul>
                        <li>Faster Checkout</li>
                        <li>Save multiple shoping addresses</li>
                        <li>View and track order and more</li>
                    </ul>
                    <Button variant="contained" style={{ background: '#f14d54' }}>Create an Account</Button>
                </div>
                <div className="log_subdiv2">
                    <form onSubmit={formik.handleSubmit}>
                        <h4>Registered Customers</h4>
                        <hr/>
                        <p>If you have an account with us, please log in</p>
                        <label>Email Address*<br />
                        <TextField name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} size="small"></TextField>
                        {formik.errors.email && formik.touched.email ? <div className="reg_err">{formik.errors.email}</div> : null}
                        </label><br />
                        <label>Password*<br />
                        <TextField name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} size="small"></TextField>
                        {formik.errors.password && formik.touched.password ? <div className="reg_err">{formik.errors.password}</div> : null}
                        </label><br/><br/>
                        <Button variant="contained" size="small" style={{ background: '#f14d54' }} type="submit">Login</Button>
                    </form>
                </div>
            </div>


            <Footer />
        </>
    );
}
export default Login;