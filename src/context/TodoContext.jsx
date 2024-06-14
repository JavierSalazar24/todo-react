import { useState } from "react";
import { createContext } from "react";
import { todos } from "../todos.json";

export const TodoContext = createContext();

export function TodoContextProvider(props) {
  const [todo, setTodo] = useState(todos);
  const [index, setIndex] = useState(null);

  const addTask = (to) => {
    setTodo([...todo, to]);
  };

  const editTask = (id) => {
    setIndex(id);
  };

  const updateTask = (todo) => {
    setTodo(todo);
  };

  const deleteTask = (id) => {
    if (confirm("Are you sure you want to delete it?"))
      setTodo(todo.filter((to) => to.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        index,
        setIndex,
        addTask,
        editTask,
        updateTask,
        deleteTask,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
