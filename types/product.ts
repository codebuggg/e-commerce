export interface Product{
    title: string;
    description: string;
    image: string;
    category: string;
    tag: string|"new"|"out of stock"|"sale";
    price: number;
    rating: number|4.5;
    id: string;
    quantity: number;
    inCart: boolean|false;
}
