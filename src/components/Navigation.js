import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Cart from "../pages/Cart/Cart";
import BookList from "../pages/BookList/BookList";
import Book from "../pages/Book/Book";
import Editbook from "../pages/Book/EditBook/Editbook";
import User from "../pages/User/User";
import EditUser from "../pages/User/EditUser/EditUser";
import Category from "../pages/Category/Category";
import EditCategory from "../pages/Category/EditCategory/EditCategory";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import { useSelector } from "react-redux";
import { RoutePaths } from "../utils/enum";

function Navigation() {
    const redirect = <Navigate to="/login" />
    const user = useSelector((state) => state.auth.user)

    return (
        <>
            <Routes>
                <Route exact path='/' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
                <Route path='/cart' element={user.id ? <Cart /> : redirect} />
                <Route exact path='/bookList' element={ user.id ? <BookList /> : redirect } />
                <Route exact path='/book' element={ user.id ? <Book /> : redirect } />
                <Route exact path='/edit-book/:id' element={ user.id ? <Editbook /> : redirect } />
                <Route exact path='/add-book' element={user.id ? <Editbook /> : redirect} />
                <Route exact path='/user' element={user.id ? <User/> : redirect} />
                <Route exact path='/edit-user/:id' element={user.id ? <EditUser/> : redirect} />
                <Route exact path='/category' element={user.id ? <Category /> : redirect} />
                <Route exact path='/edit-category/:id' element={user.id ? <EditCategory /> : redirect} />
                <Route exact path='/add-category' element={user.id ? <EditCategory /> : redirect} />
                <Route exact path='/update-profile' element={user.id ? <UpdateProfile /> : redirect} />
            </Routes>
        </>
    )
}
export default Navigation;