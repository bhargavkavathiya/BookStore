
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Demo from './pages/Demo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Routes>
          <Route path='/' Component={Register} />
          <Route path='/login' Component={Login} />
          <Route path='/productPage' Component={ProductPage} />
          <Route path='/cartPage' Component={CartPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
