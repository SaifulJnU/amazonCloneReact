import React from "react";
import "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
function Products(props){
        const {img, price,seller,name, stock}=props.product;
        return(
               <div className="product">
               <div>
                    <img src={img} alt=""></img>
               </div>
     
               <div>
               <h4 className="product-name">{name}</h4>
               <p><small>by: {seller}</small></p>
               <p>$ {price}</p>
               <p><small>Only {stock} left in stock -Order soon</small></p>
               <button className="main-button"><FontAwesomeIcon icon={faShoppingCart}/>add to cart</button>
               </div>
                   
               </div>
        );
}
export default Products;