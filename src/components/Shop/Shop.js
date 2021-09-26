import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    // Fetch data from json declare state
    const [products, setProducts] = useState([]);

    // Cart calculation:
    const [cart, setCart] = useState([]);

    const handleAddToCart = product => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart);
    }

     // Fetch data from json declare effect
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, [])

    // Shop container
    return (
        <div>
            <div className="row">

                <div className="col-md-9">
                    {/* Products load on UI */}
                    <div className="row">
                        {
                            products.map(product => <Product
                                key={product.key}
                                product={product}
                                addToCart={handleAddToCart}
                            />)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    {/* Cart calculation */}
                    <Cart
                        cart={cart}
                    />
                    
                </div>

            </div>
        </div>
    );
};

export default Shop;