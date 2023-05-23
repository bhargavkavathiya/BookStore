import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
function Login() {
    const styles = {
        dv: {
            display:'flex',
            justifyContent:'center',
        },
        dv1:{
            paddingLeft:80
        }
    }

    return (
        <>
            <Header />
            <h2 style={{ textAlign: "center" }}>Login or Create an Account</h2>
            <div style={styles.dv}>
                <div>
                    <h4>New Customer</h4>
                    <ul>
                        <li>Faster Checkout</li>
                        <li>View and track order and more</li>
                    </ul>
                    <Button variant="contained" style={{ background: '#f14d54' }}>Create an Account</Button>
                </div>
                <div style={styles.dv1}>
                    <form >
                        <h4>Registered Customers</h4>
                        <label>Email Address*<br />
                            <input type="text" required/>
                        </label><br />
                        <label>Password*<br />
                            <input type="password" required/>
                        </label><br/><br/>
                        <Button variant="contained" style={{ background: '#f14d54' }} type="login">Login</Button>
                    </form>
                </div>
            </div>


            <Footer />
        </>
    );
}
export default Login;