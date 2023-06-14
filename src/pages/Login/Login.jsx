import React, { useEffect } from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import authService from "../../service/auth.service";
// import { useAuthContext } from "../context/auth";
import { useDispatch, useSelector } from "react-redux";
import { LocalStorageKeys, hasAccess } from "../../utils/shared";
import { setUser } from "../../State/Slice/authSlice";
import './Login.css'
function Login() {

    const navigate = useNavigate();
    // const authContext=useAuthContext();.
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/login' && user.id) {
            navigate('/bookList');
        }
        if (!user.id) {
            return;
        }

        const access = hasAccess(pathname, user);
        if (!access) {
            toast.warning("Sorry, you are not authorized to access this page", { theme: 'colored' });
            navigate('/bookList');
            return;
        }
    }, [pathname, user]);


    useEffect(() => {
        const str = JSON.parse(localStorage.getItem(LocalStorageKeys.USER)) || user;
        if (str.id) {
            dispatch(setUser(str));
        }
    }, [])


    const validate = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, "Must be atleast 6 character").required('Password must require'),
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validate,
        onSubmit: (values) => {
            authService.login(values).then((res) => {
                // delete res.__v;
                // delete res._id;
                dispatch(setUser(res))
                navigate('/bookList');
                toast.success('Login successfull', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                // authContext.setUser(res);
            }).catch((err) => {
                console.log('inavalid User name and password.', err)
            })

        },
    });
    return (
        <>
            <Header />
            <h2 style={{ textAlign: "center" }}>Login or Create an Account</h2>
            <div className="log_maindiv">
                <div className="log_subdiv1">
                    <h4>New Customer</h4>
                    <hr />
                    <ul>
                        <li>Faster Checkout</li>
                        <li>Save multiple shoping addresses</li>
                        <li>View and track order and more</li>
                    </ul>
                    <Button variant="contained" style={{ background: '#f14d54' }} onClick={() => navigate('/')}>Create an Account</Button>
                </div>
                <div className="log_subdiv2">
                    <form onSubmit={formik.handleSubmit}>
                        <h4>Registered Customers</h4>
                        <hr />
                        <p>If you have an account with us, please log in</p>
                        <label>Email Address*<br />
                            <TextField name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} size="small"></TextField>
                            {formik.errors.email && formik.touched.email ? <div className="reg_err">{formik.errors.email}</div> : null}
                        </label><br />
                        <label>Password*<br />
                            <TextField type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} size="small"></TextField>
                            {formik.errors.password && formik.touched.password ? <div className="reg_err">{formik.errors.password}</div> : null}
                        </label><br /><br />
                        <Button variant="contained" size="small" style={{ background: '#f14d54' }} type="submit">Login</Button>
                    </form>
                </div>
            </div>


            <Footer />
        </>
    );
}
export default Login;