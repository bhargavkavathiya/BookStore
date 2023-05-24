
import { Button, Divider, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search'

// import Img from "./assets/Logo.png"

function Header() {
    // const styles = {
    //     btn: {
    //         display: "flex",
    //         paddingTop:20,        
    //         },
    //     dv:{
    //         paddingLeft:1000,
    //     },
    // }
    return (
        <>
            <div className="hed_div">
            
                <img src="./Logo.png" height={50} />
                <div className="hed_subdiv">
                    <Button variant="">Login</Button>
                    <Button variant="">Register</Button>
                    <Button variant="outlined">Cart</Button>
                </div>

            </div>
            <div className="hed_div2">
                <Stack spacing={3} direction="row" className="hed_stack">
                    {/* <input type="text" size={30} placeholder="What are you looking for.." /> */}
                    <TextField variant="outlined" placeholder="What are you looking for..." size="small" />
                    <Button variant="contained" onClick={() => { alert('Clicked') }} style={{ background: 'green' }} startIcon={<SearchIcon />}>Search</Button>
                    <Button variant="contained" style={{ background: '#f14d54' }}>Cancel</Button>
                </Stack>
            </div>
            <br />
        </>
    );
}
export default Header; 