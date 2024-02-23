import {Routes, Route} from 'react-router-dom'
import ProductDetails from "./components/productDetails";
import ProductList from "./components/productsList";
import Home from './pages/home';
import NavBar from './components/navBar';
import './App.css'

function App() {
  
  return (
    <>
        <nav>
           <h1>For Liberty</h1>
          <NavBar />
        </nav>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<ProductList />} />
            <Route path='/products/:id' element={<ProductDetails />}/>
      </Routes>
    </>
  )
}

export default App
