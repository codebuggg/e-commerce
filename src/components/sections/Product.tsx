
// @ts-nocheck
import React, { useEffect } from 'react';
import Card from '../widgets/Card';
import { fetchProducts } from '../../utils/api';
import { Product } from '../../../types/product';

function Products() {
    const [products, setProducts] = React.useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then((res) => {
            setProducts(res);
        })

    }, [])

    function filterProducts(e: Event) {
        const prev = document.getElementsByClassName('tab-active')[0];
        prev?.removeAttribute('class', 'tab tab-active');
        prev?.setAttribute('class', 'tab m-3 border px-4');
        const el = document.getElementById(e.target.value);
        el?.setAttribute('class', 'tab tab-active m-3');
        
        if (e.target.value === 'all'){
            fetchProducts().then((res) => {
                setProducts(res);
                
            })
        } 
        if(e.target.value !== 'all'){
       
        

            fetchProducts().then((res) => {
                const filtered = []<Product>
             res.filter((item) => {
                if(item.category === e.target.value){
                    filtered.push(item)
                }

             })
            setProducts(filtered);

            })
        }

    }

    return (

        <div>
            <div>
                <div className="tabs tabs-boxed bg-white md:ml-36 mt-14 ">
                    <div className=' md: w-2/4 flex flex-wrap'>

                    <input type={'button'} value="all" id='all' onClick={filterProducts} className="tab tab-active m-3 px-4" />
                    <input type={'button'} className="tab m-3 px-4 border" value={'electronics'} id='electronics' onClick={filterProducts} />
                    <input type={'button'} value="men's clothing" className="tab m-3 border px-4" id="men's clothing" onClick={filterProducts} />
                    <input type={'button'} className="tab m-3 px-4 border" value="women's clothing" id="women's clothing" onClick={filterProducts} />
                    </div>
                
                </div>
            </div>

            <div className='flex flex-wrap items-center align-middle mt-3 overflow-x-hidden  justify-center mx-6 ' id='products'>
                {
                    products.map((item, index) => {
                        return <Card key={index} title={item.title} image={item.image} description={item.description} id={item.id} category={item.category} tag={item.tag} />
                    })
                }

            </div>

        </div>

    )
}
export default Products;