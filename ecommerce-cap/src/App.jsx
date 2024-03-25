import {Routes, Route} from 'react-router-dom'
import ProductDetails from "./components/ProductDetails";
import Home from './pages/home';
import NavBar from './components/NavBar';
import './App.css'
import SignIn from './components/SignIn';
import CheckOut from './pages/checkout';
import Success from './components/Success';
import Footer from './components/footer';
import Products from './pages/products';


function App() {

  return (
    <>
      <NavBar />
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products />} />
            <Route path='/products/:itemId' element={<ProductDetails />}/>
            <Route path='/signin' element={<SignIn />}/>
            <Route path='/checkout' element={<CheckOut />}/>
            <Route path='/success' element={<Success />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
