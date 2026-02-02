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



//Functui tododist
const todos = [
     { task: "mow the yard", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "feed the cat", id: crypto.randomUUID() },
];
function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        // DON'T do the following i.e. generating keys during render
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}


function Button(props) {
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + "px"
    };
    return (
        <button style={buttonStyle}>{props.text}</button>
    );
}

function Click () {
    return (
        <div>
            <Button color="blue" text="Click Me!" fontSize={24} />
            <Button color="red" text=" Don't Click Me!" fontSize={12} />
            <Button color="green" text="Maybe Click Me!" fontSize={20} />
        </div>
    );
}
//Using props destructuring
function btn({color, text, fontSize}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };
    return (
        <button style={buttonStyle}>{text}</button>
    );
}


export {Hello};
export {Ani};
export{TodoList};