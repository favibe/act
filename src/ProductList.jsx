import React from "react";
import { ProductItem } from "./ProductItem.jsx";
const ProductList = ({ product }) => {
    return(
        <div>
            <h2>Product Lists</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product) =>(
                        <ProductItem key={product.id} product={product} />))}
                </tbody>
            </table>
        </div>

    );
};
export {ProductList};