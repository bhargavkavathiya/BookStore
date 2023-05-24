
import React from "react";

function Footer(){
    const styles={
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return(
        <>
            <br/>
            <div style={styles}>
                <img src="./Logo.png" height={50} />
            </div>
        </>
    );
}
export default Footer;