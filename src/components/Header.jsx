
import { Button, Divider, List, ListItem, Stack, TextField } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import SearchIcon from '@mui/icons-material/Search'
import { Link, useNavigate } from "react-router-dom";
import bookService from "../service/book.service";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
// import { useAuthContext } from "../context/auth";
import { NavigationItems, addtoCart} from "../utils/shared";
import { toast } from "react-toastify";
import {useCartContext } from "../context/cart";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../State/Slice/authSlice";
import { fetchCartData } from "../State/Slice/cartSlice";
import './Header.css'
// import cartService from "../service/cart.service";

// import Img from "./assets/Logo.png"

function Header() {

    const navigate = useNavigate();
    // const authContext = useAuthContext();
    // const cartContext= useCartContext();
     const cartData = useSelector((state) => state.cart.cartData);
    const user = useSelector((state) =>state.auth.user)
    const dispatch = useDispatch();
    
    useEffect(() => {
        const userId = user.id;

        if (userId && cartData.length === 0) {
            dispatch(fetchCartData(userId));
        }
    }, [user.id, cartData.length, dispatch]);

    const logOut = () => {
        dispatch(signOut())
        navigate('/login')
    };

    const items = useMemo(() => {
        return NavigationItems.filter(
            (item) =>
                !item.access.length || item.access.includes(user.roleId)
        );
    }, [user]);

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
    const [openSearchResult, setOpenSearchResult] = React.useState(false);


    const searchBook = async () => {
        const res = await bookService.searchBook(query);
        setbookList(res);
    };

    const search = () => {
        searchBook();
        setOpenSearchResult(true);
    };
    const addToCart = (book) => {
        if(!user.id) {
            navigate('/login');
            toast.error("Please Login before adding books to cart", { theme: 'colored' });
        } else {
            addtoCart(book,user.id).then((res) => {
                if(res.error) {
                    toast.error(res.error, {theme: 'colored'});
                } else {
                    toast.success("Item added in cart", { theme: 'colored' });
                    dispatch(fetchCartData(user.id));
                }
            })
        }
    }


  
    return (
        <>
        <div className="hed_first">
            <div className="hed_div">

                <img src="./Logo.png" height={50} />
                <div className="hed_subdiv">
                    {!user.id && (

                        <>
                            <Button variant="" onClick={handleLogin}>Login</Button>
                            <Button variant="" onClick={handleRegister}>Register</Button>
                        </>
                    )}
                    {items.map((item, index) => (
                        <Button
                            key={index}
                            variant="text"
                            sx={{
                                color: "#f14d54",
                                textTransform: "capitalize",
                            }}
                            onClick={() => {
                                navigate(item.route);
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
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
                            {cartData.length} Cart
                        </Button>
                    </Link>
                    {user.id ? (
                        <Button
                            variant="contained"
                            sx={{
                                // color: "black",
                                backgroundColor: "#f14d54",
                                "&:hover": {
                                    backgroundColor: "#f14d54", // Change the hover background color
                                },
                                textTransform: "capitalize",
                            }}
                            onClick={() => {
                                logOut();
                            }}
                        >
                            LogOut
                        </Button>
                    ) : null}
                </div>

            </div>
        </div>
            <div className="hed_div2">

                <div className="hed_stack">
                    <div className="hed_txtField">
                        <TextField placeholder="What are you looking for..." size="small" name="search" value={query} onChange={(e) => setquery(e.target.value)} />

                    </div>
                    <div className="hed_btn">
                        <Button variant="contained" style={{ background: 'green' }} startIcon={<SearchIcon />} type="submit" onClick={search}>Search</Button>
                    </div>
                    <div className="hed_btn">
                        <Button variant="contained" style={{ background: '#f14d54' }} onClick={handleCansal}>Cancel</Button>
                    </div>
                </div>
                <div className="hed_bookList">
                    {openSearchResult &&
                        <>
                            <div className="hed_product-list">

                                {bookList?.length === 0 && (
                                    <div className="hed_not-found"> No Products Found </div>
                                )
                                }
                                <List className="hed_related-product-list">
                                    {bookList?.length > 0 && bookList.map((book, i) => {
                                        return (
                                            <>
                                                <div className="hed_listItem">
                                                    <ListItem>

                                                        <div className="hed_product-list-inner">
                                                            <div className="hed_inner-lft">
                                                                <span className="txt-41 txt-lb">
                                                                    {book.name}
                                                                </span>
                                                                <p>
                                                                    {book.description}
                                                                </p>
                                                            </div>
                                                            <div className="hed_inner-rght">
                                                                <span>
                                                                    {book.price}
                                                                </span>
                                                                <Button
                                                                    size="small"
                                                                    className="c-f14d54"
                                                                    onClick={() => addToCart(book)}
                                                                
                                                                >
                                                                    Add to Cart
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </ListItem>
                                                    <Divider />
                                                </div>
                                            </>

                                        )
                                    })
                                    }
                                </List>
                            </div>
                        </>
                    }
                </div>
            </div>
            <br />
        </>
    );
}
export default Header; 