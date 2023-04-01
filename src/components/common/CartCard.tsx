import React, {useEffect} from "react";
import { removeFromCart } from "../../utils/api";
import { CartItem } from "../../../types/cart";

function CartCard(props: CartItem) {
    
    return (

        <div className="divide-y divide-gray-200 border-b border-t border-gray-200 mx-auto w-1/3 ">
            <li className="flex py-6">
              <div className="flex-shrink-0">
                <img src={props.image} alt="" className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"/>
              </div>

              <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-sm">
                      <a href="#" className="font-medium text-gray-700 hover:text-gray-800">{props.title}</a>
                    </h4>
                    <p className="ml-4 text-sm font-medium text-gray-900">$ {props.price*props.quantity}</p>
                  </div>
                 
                </div>

                <div className="mt-4 flex flex-1 items-end justify-between">
                  <p className="flex items-center space-x-2 text-sm text-gray-700">
                    <svg className="h-5 w-5 flex-shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                    </svg>
                    <span>Quantity: {props.quantity} </span>
                  </p>
                  <div className="ml-4">
                    <button onClick={(e)=>{
                        e.preventDefault();
                        removeFromCart(props)
                    }}
                    type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>

           
        </div>


    )
}

export default CartCard;