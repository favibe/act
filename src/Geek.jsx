//File path: src/App.js
import React from 'react';
import ProductList from './ProductList.jsx';

const Geek = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    return (
        <div style={{ margin: '5px' }}>
            <h2 style={{ color: 'green' }}>
                GeeksForGeeks | Reusable Components Example
            </h2>
            <ProductList products={products} />
        </div>
    );
};



// Practing event handlers, (the this binding in class componenet)

//using the bind method..
//import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Welcome'
        }
    }
    
    clickHandler() {
        this.setState({
            message:'Farewell'
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.clickHandler.bind(this)}>
                         Click</button> 
            </div>
        )
    }
}



//ex 2 using arrow function the modern way
//import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Welcome'
        }
    }

    clickHandler = () => {
        this.setState({
            message:'Farewell'
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.clickHandler}>
                  Click
                </button> 
            </div>
        )
    }
}



export default EventBind;


export {Geek};