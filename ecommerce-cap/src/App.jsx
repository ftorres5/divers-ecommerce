import {Routes, Route} from 'react-router-dom'
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductsList";
import Home from './pages/home';
import NavBar from './components/NavBar';
import './App.css'
import SignIn from './components/SignIn';

function App() {
  
  return (
    <>
        <nav>
          <NavBar />
        </nav>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<ProductList />} />
            <Route path='/products/:itemId' element={<ProductDetails />}/>
            <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </>
  )
}

export default App
