import "./shop.css";
import fakeData from "../../fakeData";
import React, { useState } from "react";
import Products from "../Products/Products";
function Shop(){
        const first10 = fakeData.slice(0,10);
        const [products, setProducts]=useState(first10);

return (
        <div className="shop-container">
                <div className="product-container">
                
        {
        products.map(pd => <Products product={pd} />)
        }
                
                </div>

                <div className="cart-container">
                        <p> this is cart </p>
                </div>
                
                
        </div>
);
}
export default Shop;