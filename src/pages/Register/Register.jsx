import React, { useEffect } from "react";
import './Register.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import userService from "../../service/user.service";
import authService from "../../service/auth.service";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    // const [role,handleRole]=React.useState('');
    // const [data,setData]=React.useState('');

    // const[firstName,setfirstName]=React.useState('');
    // const[lastName,setlastName]=React.useState('');
    // const[email,setemail]=React.useState('');
    // const[password,setpassword]=React.useState('');


    // useEffect(()=>{
    //     fetch('https://book-e-sell-node-api.vercel.app/api/user/roles').then((result)=>{
    //         result.json().then((resp)=>{
    //             setData(resp)
    //         })
    //     })
    // },[])

    // function saveUser(){
    // fetch('https://jsonplaceholder.typicode.com/posts',{
    //     method:'POST',
    //     headers:{
    //         'Accepe':'application/json',
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify()
    // })
    // }
    const [roleList, setRoleList] = React.useState('');

    const getRoles = () => {
        userService.getAllRoles().then((res) => {
            setRoleList(res);
        });
    };
    useEffect(() => {
        getRoles();
    }, [])
    // useEffect(() => {
    // axios.get("https://book-e-sell-node-api.vercel.app/api/user/roles").then((res) => {
    //     console.log("User detail:", res.data);
    //     setUser(res.data);
    //     });
    // }, [])
    const validate = Yup.object({
        firstName: Yup.string().min(3, 'Character must be more than 3').max(25, 'Not Accepted').required('Required'),
        lastName: Yup.string().min(3, 'Character must be more than 3').max(25).required('Required'),
        email: Yup.string().email('Email is invalid').required('email is required'),
        password: Yup.string().min(6, "Must be atleast 6 character").required('Password must require'),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'password must match').required('Require'),
    })


    const formik = useFormik({
        initialValues: {
            firstName: " ",
            lastName: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: validate,
        onSubmit: (values) => {
            // alert(JSON.stringify(values))
            delete values.id;
            delete values.confirm_password;

            authService.create(values).then((res) => {
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
                navigate("./login")
            });
            // axios.post("https://book-e-sell-node-api.vercel.app/api/user", values /*userData */).then((res) => {
            // toast.success('Success Notification ', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // });
            // })
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
                                {/* <input type='text' name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                                <TextField size="small" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}></TextField>
                                {formik.errors.firstName && formik.touched.firstName ? <div className="reg_err">{formik.errors.firstName}</div> : null}
                            </label><br />

                        </div>
                        <div className="reg_single_column">
                            <label>Last Name:<br />
                                {/* <input type='text' name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                                <TextField name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} size="small"></TextField>
                                {formik.errors.lastName && formik.touched.lastName ? <div className="reg_err">{formik.errors.lastName}</div> : null}
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
                        <div className="reg_single_column">
                            <FormControl fullWidth>
                                <label htmlFor="roleId">Role*</label>
                                <Select
                                    id="roleId"
                                    name="roleId"
                                    label="RoleId"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.roleId}
                                    error={formik.errors.roleId && formik.touched.roleId}
                                    size="small"
                                >
                                    {roleList.length > 0 &&
                                        roleList.map((role) => (
                                            <MenuItem value={role.id} key={"name" + role.id}>
                                                {role.name}
                                            </MenuItem>
                                        ))}
                                </Select>
                                <div className="text-red-600">
                                    {formik.errors.roleId && formik.touched.roleId && formik.errors.roleId}
                                </div>
                            </FormControl>
                        </div>

                    </div>
                    <h3>Login Information</h3>
                    <hr />
                    <div className="reg_single_row">
                        <div className="reg_single_column">
                            <label>Password:<br />
                                {/* <input type='text' name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                                <TextField type="password" size="small" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></TextField>
                                {formik.errors.password && formik.touched.password ? <div className="reg_err">{formik.errors.password}</div> : null}
                            </label><br />
                        </div>
                        <div className="reg_single_column">
                            <label>Confirm Password:<br />
                                {/* <input type='text' name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                                <TextField type="password" size="small" name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange} onBlur={formik.handleBlur}></TextField>
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