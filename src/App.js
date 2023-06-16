
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart/Cart';
import { AuthWarpper, AuthWrapper } from './context/auth';
import BookList from './pages/BookList/BookList';
import Book from './pages/Book/Book';
import Editbook from './pages/Book/EditBook/Editbook';
import User from './pages/User/User';
import EditUser from './pages/User/EditUser/EditUser';
import Category from './pages/Category/Category';
import EditCategory from './pages/Category/EditCategory/EditCategory';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import { CartWrapper } from './context/cart';
import { Provider, useSelector } from 'react-redux';
import store from './State';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { loadIcon } from './assets';

function App() {
  return (
    <>
    
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />

      <BrowserRouter>
        <Provider store={store}>
        
          {/* <AuthWrapper> 
           <CartWrapper> */}
           <Header/>
          
            <Navigation/>
          <Footer/>
          {/* </CartWrapper> 
         </AuthWrapper> */}
        </Provider>
      </BrowserRouter>
      

    </>
  );
}

export default App;
