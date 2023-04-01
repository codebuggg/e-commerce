// fetch products from api

import { CartItem } from "../../types/cart";
import { Product } from "../../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
}
// get one product

export const getProduct = async (id: string): Promise<Product> => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
}

// filter products by category from api

export const filterProductsByCategory = async (category: string): Promise<Product[]> => {
    const response = await fetch(`https://fakestoreapi.com/products/category`);
    const data = await response.json();
    data.filter((product: Product) => product.category === category);
    return data;
}

// add to cart local storage

export const addToCart = (product: CartItem) => {
    const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")!) : [];
    let alreadyExists = false;
    cartItems.forEach((item: Product) => {
        if(item.id === product.id){
            item.quantity++;
            alreadyExists = true;
        }
    });
    if(!alreadyExists){
        cartItems.push(product);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// remove from cart local storage

export const removeFromCart = (product: CartItem) => {
    const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")!) : [];
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((item: Product) => item.id !== product.id)));
    window.location.reload();
}

// get cart items from local storage

export function getCartItems(): CartItem[]{
    return localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")!) : [];
}

// on checkout clear cart

export const onCheckout = () => {
    localStorage.removeItem("cartItems");
}
