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
class Countt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countt: 0};
    }
}
render () {
    return (
        <div>
            <h1> Count: {this.state.countt}</h1>
        </div>
    );
};
//updating stste
class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0,};
    }
};
increment = () => {
     this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };
    render() {
        return (
            <div>
                <h1>
                    The current count is :{" "}
                    {this.state.count}
                </h1>
                <button onClick={this.increment}>
                    Increase
                </button>
            </div>
        );
    }

// state in functional component
import { useState } from "react";
function Counter () {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
}
