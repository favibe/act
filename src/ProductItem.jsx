import React from "react";
const ProductItem = ({ product }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
};
export {ProductItem};