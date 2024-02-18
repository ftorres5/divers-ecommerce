import { useGetProductsQuery } from "../src/state"
import ProductList from "./components/productsList";

import './App.css'

function App() {

  const { data, loading, error } = useGetProductsQuery();
  // const [ deleteEvent ] = useDeleteEventMutation()
  // console.log(useGetProductsQuery());

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <ProductList/>
    </>
  )
}

export default App
