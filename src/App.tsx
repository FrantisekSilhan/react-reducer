import { useReducer, useRef, useState } from 'react'
import './App.css'

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

const initialToDos: Array<ITodo> =  [
  {
    id: crypto.randomUUID(),
    title: "Naučit se na písemku z Reactu",
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: "Doladit GB",
    completed: false
  },
  {
    id: crypto.randomUUID(),
    title: "Dodělat MAUI",
    completed: false
  }
];

const reducer = () => {

};

function App() {
  //const [todos, dispatch] = useState(initialToDos);
  const [todos, dispatch] = useReducer(reducer, initialToDos);


  return (
    <>
      {todos.map((todo) => (
        <div>
          <input type="checkbox" checked={todo.completed} />
          <span>{todo.title}</span>
          <button>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App
