import React, { useState } from "react";
const Counter = () =>  {
    const [ count, setCount] = useState(0);

    const handkeClick1  = () => {
        setCount(count + 1);
    };
    const handkeClick2 = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h1> Count: {count}</h1>
            <button onClick={handkeClick1}>increment</button>
            <button onClick={handkeClick2}>decrement</button>
        </div>
    );
};
export {Counter};
//diffrent stylling
 /* return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "300%",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "-15%",
            }}
        >
            Counter App
            <div
                style={{
                    fontSize: "120%",
                    position: "relative",
                    top: "10vh",
                }}
            >
                {count}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginRight: "5px",
                        backgroundColor: "green",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick1}
                >
                    Increment
                </button>
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick2}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}; */