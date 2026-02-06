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

//practice class comport
class Welcome extends React.Component {
    render() {
        return <h1> Hello </h1>
    }
};
//creating a state obj
class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0};
    }
}
render () {
    return (
        <div>
            <h1> Count: {this.state.count}</h1>
        </div>
    );
};
