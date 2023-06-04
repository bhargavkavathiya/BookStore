import React from "react";
import bookService from "../service/book.service";
import { defaultFilter } from "../constant/constant";
import { Button, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BookPage() {
    const navigate=useNavigate();
    const [filters, setFilters] = React.useState(defaultFilter);
    const [bookResponse, setBookResponse] = React.useState({
        pageIndex: 0,
        PageSize: 10,
        totalPages: 1,
        items: [],
        totalItems: 0,
    });
    function apicall(){
        bookService.getAll(filters).then((res)=>{
            setBookResponse(res);
        })
    };
    function nav(){
        navigate('/edit')
    };

    return (
        <>
            <h1>HELLO BK..</h1>
            <Button variant="contained" onClick={apicall}>Find Book</Button>
            <Button variant="contained" onClick={nav}>Edit</Button>
     
                {bookResponse.items.map((res)=>(
                    <div style={{display:'flex'}}>
                        <div key={res.id}>{res.name}</div>
                        <br/><br/>
                        <div key={res.id}>{res.price}</div>
                    </div>
                ))}
           
        </>
    );
}
export default BookPage;