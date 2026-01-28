function Hello() {
    return <h1>Hello There! from the greeting Component</h1>;
}



function Action () {
    const animals = ["dog", "cat", "cow", "sheep"];
    const animalsList = animals.map((animals) => <li key={animals}>{animals}</li>)
    return (
        <div>
            <h1>Animals: </h1>
            <ul>{animalsList}</ul>
        </div>
    );
}


function ListItem(props) {
    return <li>{props.anaimal}</li>
}
function List(props) {
    if(!props.anaimal) {
        return <div>Loading....</div>;
    }
    if (props.anaimal.length === 0) {
        return <div> No animal found.</div>;
    }
    return (
        <ul>
            {props.anaimal.map((anaimal) => {
                return <ListItem key-={anaimal} anaimal={anaimal} />;
            })}
        </ul>
    );
}
function Ani() {
    const anaimal = ["dog", "cat", "cow", "sheep"];
    return (
        <div>
            <h1>Animals: </h1>
            <List anaimal={anaimal} />
        </div>
    )
}


//CAN USE && INSTEAD OF ? TENERARY OPERATOR
// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//       })}
//     </ul>
//   );
// }

// function App() {
//   const animals = ["Lion", "Cow", "Snake", "Lizard"];

//   return (
//     <div>
//       <h1>Animals: </h1>
//       <List animals={animals} />
//     </div>
//   );
// }
export {Hello};
export {Ani};