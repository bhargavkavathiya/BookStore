import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Table, TableCell, TableHead, TableRow, TextField } from "@mui/material";
function ProductPage()
{
    return(
        <>
            <TextField label="F name"></TextField>
            <TextField label="Lzname"></TextField>
            <TextField label="name"></TextField>
        </>
    );
}
export default ProductPage;