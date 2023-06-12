
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import { AuthWarpper, AuthWrapper } from './context/auth';
import BookList from './pages/BookList';
import Book from './pages/Book';
import Editbook from './pages/Editbook';
import User from './pages/User';
import EditUser from './pages/EditUser';
import Category from './pages/Category';
import EditCategory from './pages/EditCategory';
import UpdateProfile from './pages/UpdateProfile';
import { CartWrapper } from './context/cart';

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

        <AuthWrapper>
          <CartWrapper>
          <Routes>
            <Route path='/' Component={Register} />
            <Route path='/login' Component={Login} />
            <Route path='/cart' Component={Cart} />
            <Route path='/bookList' Component={BookList} />
            <Route path='/cart' Component={Cart} />
            <Route path='/book' Component={Book} />
            <Route path='/edit-book/:id' Component={Editbook} />
            <Route path='/add-book' Component={Editbook} />
            <Route path='/user' Component={User} />
            <Route path='/edit-user/:id' Component={EditUser}/>
            <Route path='/category' Component={Category} />
            <Route path='/edit-category/:id' Component={EditCategory}  />
            <Route path='/add-category' Component={EditCategory}  />
            <Route path='/cart' Component={Cart} />
            <Route path='/update-profile' Component={UpdateProfile} />

          </Routes>
          </CartWrapper>
        </AuthWrapper>

      </BrowserRouter>

    </>
  );
}

export default App;
