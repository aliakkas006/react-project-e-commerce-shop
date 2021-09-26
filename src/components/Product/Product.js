import React from 'react';

const Product = props => {
    // console.log(props.product);
    const { name, img, category, price, stock, shipping } = props.product;
    return (
        <div className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid rounded-start" alt="product-img" />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{category}</h5>
                            <p className="card-text"> {name} </p>
                            <p><small> ${price} </small></p>
                            <p className="card-text"><small className="text-muted">Products available {stock} </small></p>
                            <button
                                onClick={() => props.addToCart(props.product)}
                                className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;