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













//How to render a list in react
//1. using Array.map()
// Array.map() function


const arrayList = ['List Item 1', 'List Item 2', 'List Item 3'];

const UsingArrayMap = () => (
    <div>
        {
            arrayList.map((item, index) => (
                <div key={index}>{item}</div>
            ))
        }
    </div>
);

const App1 = () => (
    <div>
        <h2>Using Array.map()</h2>
        <UsingArrayMap />
    </div>
);


//2. U  sing for loops
// USING for Loop


const arrayList = ['List Item 1', 'List Item 2', 'List Item 3'];

const UsingForLoop = () => {
    const arrayListComponents = [];
    for (let i = 0; i < arrayList.length; i++) {
        arrayListComponents.push(<div key={i}>{arrayList[i]}</div>);
    }
    return <div>{arrayListComponents}</div>;
};

const App2 = () => (
  <div>
    <h2>Using for loop</h2>
    <UsingForLoop />
  </div>
);

//Using ForEach
import React from 'react';

const arrayList =
    ['List Item 1', 'List Item 2', 'List Item 3'];

const UsingArrayForEach = () => {
    const arrayListComponents = [];
    arrayList.forEach(
        (item, index) => {
            arrayListComponents.push(
                <div key={index}>
                    {item}
                </div>
            );
        }
    );
    return <div>{arrayListComponents}</div>;
};

const App = () => (
    <div>
        <h2>
            Using Array.forEach()
        </h2>
        <UsingArrayForEach />
    </div>
);
//using React.Children.Map()
import React from 'react';

const arrayList = ['List Item 1', 'List Item 2', 'List Item 3'];

const UsingReactChildrenMap = ({ children }) => {
    const modifiedChildren =
        React.Children.map(children, (child, index) => (
            <div key={index}>Modified {child}</div>
        ));
    return <div>{modifiedChildren}</div>;
};

const App = () => (
    <div>
        <h2>
            Using React.Children.map()
        </h2>
        <UsingReactChildrenMap>
            <div style={
                {
                    display: 'inline-block',
                    marginRight: '10px'
                }}>
                {arrayList[0]}
            </div>
            <div style={
                {
                    display: 'inline-block',
                    marginRight: '10px'
                }}>
                {arrayList[1]}
            </div>
            <div style={
                {
                    display: 'inline-block',
                    marginRight: '10px'
                }}>
                {arrayList[2]}
            </div>
        </UsingReactChildrenMap>
    </div>
);

//using maps and JSX S  pread (....)




export default EventBind;


export {Geek};