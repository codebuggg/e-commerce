import React from "react";
import { Link } from "react-router-dom";
import { CardProps } from "../../../types/card";


function Card(props: CardProps) {
    return (
        <div className="card w-96 h-96 bg-white shadow-xl m-8">
            <figure
                className="h-64 p-8 "><img src={props.image} alt="Shoes" />
            </figure>
            <div className="p-8">
                <h2 className="card-title text-left">
                    {props.title}
                </h2>
                <div className="mt-2">{props.tag}</div>

                <p className="line-clamp-2 pt-4">{props.description}</p>

                <p className="line-clamp-2 pt-4">{props.price}</p>

                <div className="pt-4">
                <Link to={`/product/${props.id}`}>  
                    <button className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:1/3">View</button>
                </Link>
                </div>
                

                <div className="card-actions justify-end">

                    <div className="badge badge-outline rounded-md">{props.category}</div>

                </div>
            </div>
        </div>


        
    )
}

export default Card;