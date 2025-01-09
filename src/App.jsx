import { useEffect, useState } from "react";
import { FormItems } from "./components/FormItems";
import { TodoList } from "./components/TodoList";


export default function App() {

  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem("Items");
    if (!items) return [];
    return JSON.parse(items);
  });

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo;
      })
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <>
      <FormItems onSubmit={addTodo} />
      <h1>Todo List</h1>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </>
  );
}