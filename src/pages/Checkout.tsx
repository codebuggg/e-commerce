import React, {useEffect} from "react";
import CartCard from "../components/common/CartCard";
import { getCartItems } from "../utils/api";
import { useStateValue } from "../global";


function Checkout() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: 'CALCULATE_TOTAL',
      total: getCartItems().reduce((total: number, item: any) => total + item.price * item.quantity, 0)
    })
    
    dispatch({
      type: 'ADD_TO_CART',
      item: getCartItems()
    })



  }, [])
  return (
    <div className="flex flex-col items-center min-h-screen">
      {
        getCartItems().map((item: { title: string; image: string; description: string; id: string; category: string; tag: string; price: number; rating: number; inCart: boolean; quantity: number; }, index: React.Key | null | undefined) => {
          return <CartCard 
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            id={item.id}
            category={item.category}
            tag={item.tag}
            price={item.price}
            rating={item.rating}
            inCart={item.inCart}
            quantity={item.quantity}
          />
        })
      }

        <section aria-labelledby="summary-heading" className="mt-10 mx-auto w-1/3">
          <h2 id="summary-heading" className="sr-only">Order summary</h2>

          <div>
            <dl className="space-y-4">
              {state.total &&(
                <div className="flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                <dd className="ml-4 text-base font-medium text-gray-900">$ {state.total.toFixed(2)}</dd>
              </div>
              )}
              
            </dl>
            <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
          </div>

          <div className="mt-10">
            <button type="submit" className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              or
              <a href={`/`} className="font-medium text-indigo-600 hover:text-indigo-500 ml-2">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </p>
          </div>
        </section>
     
    </div>
  );
}

export default Checkout