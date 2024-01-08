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

type Action = {
  type: "COMPLETE";
  id: string;
} | {
  type: "DELETE";
  id: string;
} | {
  type: "ADD";
  title: string;
};

const reducer = (state: Array<ITodo>, action: Action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      });
    case "DELETE":
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
    case "ADD":
      break;
    default:
      return state;
  }
  return state;
};

function App() {
  //const [todos, dispatch] = useState(initialToDos);
  const [todos, dispatch] = useReducer(reducer, initialToDos);
  const handleComplete = (id: string) => {
    dispatch({
      type: "COMPLETE",
      id: id
    });
  };
  const handleDelete = (id: string) => {
    dispatch({
      type: "DELETE",
      id: id
    });
  };

  return (
    <>
      {todos.map((todo) => (
        <div>
          <input type="checkbox" checked={todo.completed} onChange={() => {handleComplete(todo.id)}} />
          <span>{todo.title}</span>
          <button onClick={() => {handleDelete(todo.id)}}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App
