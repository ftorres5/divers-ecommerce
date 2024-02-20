import ProductDetails from "./components/productDetails";
import ProductList from "./components/productsList";
import './App.css'

function App() {
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {/* <ProductList/> */}
      <ProductDetails/>
    </>
  )
}

export default App
