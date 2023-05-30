
import { Button, Divider, List, ListItem, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search'
// import { use } from "";
import userService from "../service/user.service";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import bookService from "../service/book.service";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import './Header.css'

// import Img from "./assets/Logo.png"

function Header() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    };

    const handleRegister = () => {
        navigate('/')
    };

    const handleCansal = () => {
        setOpenSearchResult(false)
    }

    const [query, setquery] = React.useState("");
    const [bookList, setbookList] = React.useState([]);
    const [openSearchResult, setOpenSearchResult] = React.useState();


    const searchBook = async () => {
            // const res = await bookService.searchBook(query);
            // setbookList(res);
            // console.log(res) // to test gloabal search api 
            bookService.searchBook(query).then((res)=>{
                alert(res);
            })
        }
    

    const search = () => {
        document.body.classList.add("search-result-open");
        searchBook();
        setOpenSearchResult(true)
    };

    return (
        <>
            <div className="hed_div">

                <img src="./Logo.png" height={50} />
                <div className="hed_subdiv">
                    <Button variant="" onClick={handleLogin}>Login</Button>
                    <Button variant="" onClick={handleRegister}>Register</Button>
                    <Link to='/cart'>
                            <Button 
                                size="small"
                                variant="outlined" 
                                sx={{
                                    color: '#f14d54',
                                    borderColor: '#f14d54'
                                }}
                                startIcon={<ShoppingCartIcon />}
                            >
                                {0} Cart 
                            </Button>
                        </Link>
                </div>

            </div>
            <div className="hed_div2">
                <form >
                    <Stack spacing={3} direction="row" className="hed_stack" >
                        {/* <input type="text" size={30} placeholder="What are you looking for.." /> */}
                        <div
                            className="search-overlay"
                            onClick={() => {
                                document.body.classList.remove('search-result-open')
                                setOpenSearchResult(false)
                            }}
                        >
                            {/* This is an Empty div     */}
                        </div>
                        <div>
                            <TextField placeholder="What are you looking for..." size="small" name="search" value={query} onChange={(e) => setquery(e.target.value)} />
                    {openSearchResult && 
                        <>
                        <div className="h-product-list">
                            {/* <div className="h-no-prod"> */}
                                {bookList?.length === 0 && (
                                        <p className="h-not-found"> No Products Found </p>
                                    )
                                }
                            {/* </div> */}
                            <List className="h-related-product-list">
                                {bookList?.length > 0 && bookList.map((item, i) => {
                                    return(
                                        <ListItem>
                                            <div className="h-product-list-inner">
                                                <div className="h-inner-lft">
                                                    <span className="txt-41 txt-lb">
                                                        {item.name}
                                                    </span>
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="h-inner-rght">
                                                    <span>
                                                        {item.price}
                                                    </span>
                                                    <Button
                                                        size="small"
                                                        className="c-f14d54"
                                                    >
                                                        Add to Cart
                                                    </Button>
                                                </div>
                                            </div>
                                        </ListItem>
                                    )})    
                                }
                            </List>
                        </div>
                    </>
                    }
                        </div>
                        <Button variant="contained" style={{ background: 'green' }} startIcon={<SearchIcon />} type="submit" onClick={search}>Search</Button>
                        <Button variant="contained" style={{ background: '#f14d54' }} onClick={handleCansal}>Cancel</Button>
                    </Stack>
                </form>
            </div>
            <br />
        </>
    );
}
export default Header; 