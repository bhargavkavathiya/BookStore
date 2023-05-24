import React, { useEffect } from "react";
import './Register.css'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    const [role,handleRole]=React.useState('');
    const [data,setData]=React.useState('');

    const[Fname,setFname]=React.useState('');
    const[Lname,setLname]=React.useState('');
    const[email,setemail]=React.useState('');
    const[password,setpassword]=React.useState('');


    useEffect(()=>{
        fetch('https://book-e-sell-node-api.vercel.app/api/user/roles').then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])

    function saveUser(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accepe':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify()
    })
    }
    const validate = Yup.object({
        Fname: Yup.string().min(3, 'Character must be more than 3').max(25, 'Not Accepted').required('Required'),
        Lname: Yup.string().min(3, 'Character must be more than 3').max(25).required('Required'),
        email: Yup.string().email('Email is invalid').required('email is required'),
        password: Yup.string().min(6, "Must be atleast 6 character").required('Password must require'),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'password must match').required('Require'),
    })


    const formik = useFormik({
        initialValues: {
            Fname: " ",
            Lname: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values))

        },
    });

    return (
        <>
            <Header />
            <div className="reg_full_form">
                <h2 style={{ textAlign: 'center' }}>Login or Create an Account</h2>
                <form onSubmit={formik.handleSubmit} >
                    <h3>Personal Information</h3>
                    <hr />
                    <div className="reg_single_row">
                        <div className="reg_single_column">
                            <label>First Name:<br />
                                {/* <input type='text' name="Fname" value={formik.values.Fname} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                                <TextField size="small" name="Fname" value={formik.values.Fname} onChange={formik.handleChange} onBlur={formik.handleBlur}></TextField>
                                {formik.errors.Fname && formik.touched.Fname ? <div className="reg_err">{formik.errors.Fname}</div> : null}
                            </label><br />

                        </div>
                        <div className="reg_single_column">
                            <label>Last Name:<br />
                                {/* <input type='text' name="Lname" value={formik.values.Lname} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                                <TextField name="Lname" value={formik.values.Lname} onChange={formik.handleChange} onBlur={formik.handleBlur} size="small"></TextField>
                                {formik.errors.Lname && formik.touched.Lname ? <div className="reg_err">{formik.errors.Lname}</div> : null}
                            </label><br />
                        </div>
                    </div>
                    <div className="reg_single_row">
                        <div className="reg_single_column">
                            <label>Email Address:<br />
                                {/* <input type='text' name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                                <TextField size="small" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></TextField>
                                {formik.errors.email && formik.touched.email ? <div className="reg_err">{formik.errors.email}</div> : null}
                            </label>
                        </div>
                        <div className="reg_single_column" style={{paddingTop:22}}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label" >Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Role"
                                    onChange={formik.handleChange}
                                >
                                
                                    <MenuItem ></MenuItem>
                                    <MenuItem >Twenty</MenuItem>
                                    <MenuItem >Thirty</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </div>

                    </div>
                    <h3>Login Information</h3>
                    <hr />
                    <div className="reg_single_row">
                        <div className="reg_single_column">
                            <label>Password:<br />
                                {/* <input type='text' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                                <TextField size="small" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></TextField>
                                {formik.errors.password && formik.touched.password ? <div className="reg_err">{formik.errors.password}</div> : null}
                            </label><br />
                        </div>
                        <div className="reg_single_column">
                            <label>Confirm Password:<br />
                                {/* <input type='text' name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                                <TextField size="small" name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange} onBlur={formik.handleBlur}></TextField>
                                {formik.errors.confirm_password && formik.touched.confirm_password ? <div className="reg_err">{formik.errors.confirm_password}</div> : null}
                            </label><br />
                        </div>
                    </div>
                    {/* <input type="submit" /> */}
                    <br />
                    <Button variant="contained" size="small" style={{ background: '#f14d54' }} type="submit">Register</Button>
                </form>

            </div >
            <br />


            <Footer />
        </>
    );
}
export default Register;