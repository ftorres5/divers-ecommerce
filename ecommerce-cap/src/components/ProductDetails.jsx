import Loading from "./Loader";
import { useParams } from 'react-router-dom'
import { useGetIdQuery } from '../state';
import { useDispatch } from 'react-redux';
import { addItem } from "../state/cartSlice";
import { useSelector } from "react-redux";



export default function productDetails() {
  const {itemId} = useParams();
  console.log(`****`, itemId)

  const { data, error, isLoading } = useGetIdQuery(itemId);
  console.log(`******`, data)

  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems)

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ 
      itemId,
      title: data.title,
      image: data.image,
      price: data.price,
      quantity: 1 }));
  };

  return (
    <>
      {error ? <div>Error</div> : <div></div>}
      {isLoading ? <div><Loading/></div> :
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            {data && 
              <div className="lg:max-w-lg lg:self-end">
                <div className="mt-4">
                <img
                      src={data.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.title}</h1>
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">{data.price}</h3>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Add to bag
                </button>
              </div> 
            }
          </div>  
        </div>
      }
    </>
  )
}
