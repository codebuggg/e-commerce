import React, { useEffect, useState } from "react";
import { addToCart } from "../utils/api";
import { getProduct } from "../utils/api";
import { CartItem } from "../../types/cart";
function ProductPage() {
    useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        getProduct(id).then((res) => {
            console.log(res);
            setProduct(res);
        });

    }, []);

    const [product, setProduct] = useState<CartItem>();
    const [quantity, setQuantity] = useState<number>(1);
    const [added, setAdded ] = useState<boolean>(false);


 

    const AddToCart = () => {
        const cartItem : CartItem = {
            id: product!.id,
            title: product!.title,
            price: product!.price,
            image: product!.image,
            quantity: quantity,
            inCart: true,
            description: product!.description,
            category: product!.category,
            tag: product!.tag,
            rating: product!.rating
        }
        addToCart(cartItem);
      
        setAdded(true);
        
    };


    return (
        // <div className="m-auto flex items-center md:h-screen bg-white p-4">
        
        // </div>


        <div className="m-auto h-screen bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                
                    <div className="flex flex-col-reverse">
                    
                        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                            <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                                <button id="tabs-1-tab-1" className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4" aria-controls="tabs-1-panel-1" role="tab" type="button">
                                    <span className="sr-only"> Angled view </span>
                                    <span className="absolute inset-0 overflow-hidden rounded-md">
                                    <img src={product?.image}  alt="" className="h-full w-full object-cover object-center"/>
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>

            
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product?.title}</h1>

                <div className="mt-3">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">$ {product?.price}</p>
                </div>


                <div className="mt-6">
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6 text-base text-gray-700">
                    <p>{product?.description}</p>
                    </div>
                </div>

                <form className="mt-6 flex flex-col">
                   

                    <div className="sm:flex-col mt-10 flex">
                    {
                        added ? <button className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">Added To Cart</button> : <button className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full" onClick={AddToCart}>Add To Cart</button>
                    }
                     <div className="mt-4">
                        <a href={`/`} className="font-medium text-indigo-600 hover:text-indigo-500 ml-2">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                        </div>
                    </div>
                    
                </form>

               
                </div>
            </div>
            </div>
        </div>

    );
}

export default ProductPage;