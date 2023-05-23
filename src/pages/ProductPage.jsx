import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
function ProductPage()
{
    return(
        <>
        <Header/>
            <h1>This is ProductPage</h1>
            <Link to="/cartPage">CartPage</Link>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>id</TableCell>
                        <TableCell>id</TableCell>
                        <TableCell>id</TableCell>
                        <TableCell>id</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        <Footer/>
        </>
    );
}
export default ProductPage;