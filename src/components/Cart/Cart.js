import React from 'react';

const Cart = props => {

    const { cart } = props || {};
    // console.log(cart);

    const total = (cart.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)).toFixed(2);

    const tax = (total * 0.1).toFixed(2);
    // const shippingCost = cart.shipping;


    // console.log(cart);
    return (
        <div>
            <h2><i class="fas fa-shopping-cart"></i>{cart.length}</h2>
            <ul>
                {
                    cart.map(pd => <li>{pd.name}</li>)
                }
            </ul>
            <h3>Total price: {total} </h3>
            <h4>Tax: {tax} </h4>
            {/* <h4>Shipping Cost: {shippingCost} </h4> */}
        </div>
    );
};

export default Cart;