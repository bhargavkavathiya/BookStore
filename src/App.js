
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductPage from './pages/BookList';
import Demo from './pages/Demo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import { AuthWarpper } from './context/auth';
import BookList from './pages/BookList';
import Header from './components/Header';
import Footer from './components/Footer';
import BookPage from './pages/BookPage';
import UpdateBook from './pages/UpdateBook';

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
      
      <AuthWarpper>
        <Routes>
          <Route path='/' Component={Register} />
          <Route path='/login' Component={Login} />
          <Route path='/cart' Component={Cart} />
          <Route path='/bookList' Component={BookList} />
          <Route path='/cart' Component={Cart} />
          <Route path='/book' Component={BookPage} />
          <Route path='/edit' Component={UpdateBook} />
        </Routes>
        </AuthWarpper>
       
      </BrowserRouter>
      
    </>
  );
}

export default App;
