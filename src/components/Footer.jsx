
import React from "react";

function Footer(){
    const styles={
        firstDiv:{
            backgroundColor:'beige',
            height:'100px',
        },
        subDiv:{
            display: "flex",
            justifyContent: "center",
            paddingTop:'20px'
                 
        },
        
    }
    return(
        <>
            <br/>
            <div style={styles.firstDiv}>
            <div style={styles.subDiv}>
                <img src="./Logo.png" height={50} />
            </div>
            </div>
        </>
    );
}
export default Footer;