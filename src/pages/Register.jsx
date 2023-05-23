import React from "react";
import './MyCss.css'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, TextField } from "@mui/material";
function Register() {
    const styles = {
        full_form:{
            textAlign:'center',
            width:800,
            paddingLeft:360

        },
        single_row: {
            // width: 500,
            display:'flex',
            justifyContent:'center' 

        },
        single_column: {
            width: 300,
            
        },
        
    };
    return (
        <>
            <Header />
        <div style={styles.full_form}>
            <h2 style={{ textAlign: "center" }}>Login or Create an Account</h2>
            <h4><u>Personal Information</u></h4>
            <div style={styles.single_row}>
                <div style={styles.single_column}>
                    <label>First Name:<br />
                    <TextField variant="outlined" size="small"/>
                    </label><br />

                </div>
                <div  style={styles.single_column}>
                    <label>Last Name:<br />
                    <TextField variant="outlined" size="small"/>
                    </label><br />
                </div>
            </div>
                <div style={styles.single_row}>
                    <label>Email Address:<br />
                    <TextField variant="outlined" size="small"/>
                    </label>
                </div>
                <h4><u>Login Information</u></h4>
            <div style={styles.single_row}>
                <div  style={styles.single_column}>
                    <label>Password:<br />
                    <TextField variant="outlined" size="small"/>
                    </label><br />
                </div>
                <div  style={styles.single_column}>
                    <label>Confirm Password:<br />
                    <TextField variant="outlined" size="small"/>
                    </label><br />
            </div>
                </div>
                {/* <input type="submit" /> */}
                <br />
                <Link to='/login'><Button variant="contained" size="small" style={{ background: '#f14d54' }}>Register</Button></Link>


        </div >
            <br />


            <Footer />
        </>
    );
}
export default Register;