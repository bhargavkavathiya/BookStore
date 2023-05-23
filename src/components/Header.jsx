
import { Button, Divider, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search'

// import Img from "./assets/Logo.png"

function Header() {
    const styles = {
        btn: {
            display: "flex",
            paddingTop:20,        
            },
        dv:{
            paddingLeft:1000,
        },
    }
    return (
        <>
            <div style={styles.btn}>

                <img src="./Logo.png" height={50}/>
                {/* <Stack direction="row" spacing={2} divider={<Divider orientation="vertical"  />} justifyContent="right" height={40}> */}
                <div style={styles.dv}>
                    <Button variant="">Login</Button>
                    <Button variant="">Register</Button>
                    <Button variant="outlined">Cart</Button>
                </div>
                {/* </Stack> */}
                
            </div>
            
            <Stack spacing={3} direction="row" height={40} justifyContent="center">
                {/* <input type="text" size={30} placeholder="What are you looking for.." /> */}
                <TextField variant="outlined" placeholder="What are you looking for..." size="small" height={50}/>
                <Button variant="contained" onClick={() => { alert('Clicked') }} style={{ background: 'green' }} startIcon={<SearchIcon/>}>Search</Button>
                <Button variant="contained" style={{ background: '#f14d54' }}>Cancel</Button>
            </Stack>
        <br/>
        </>
    );
}
export default Header; 