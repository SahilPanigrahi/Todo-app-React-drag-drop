import { useEffect, useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { Column } from "./components/Column";
import { Input } from "./components/Input";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editMode, setEditMode] = useState(true);

  // Function to fetch todos from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      fetchInitialTodos();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to fetch initial 3 todos from JSONPlaceholder API
  const fetchInitialTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        saveTodosToLocalStorage(data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  };

  // Function to save todos to local storage
  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // Function to handle adding a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoObj = {
        id: todos.length + Math.random() * 10, 
        title: newTodo,
        completed: false
      };
      const updatedTodos = [...todos, newTodoObj];
      setTodos(updatedTodos);
      saveTodosToLocalStorage(updatedTodos);
      setNewTodo('');
    }
  };

  // Function to handle deleting a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  // Function to handle marking a todo as completed or uncompleted
  const toggleCompleted = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  // Functions to handle drag and drop using dnd-kit
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTodoPos = (id) => todos.findIndex((todo) => todo.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTodos((todos) => {
      const originalPos = getTodoPos(active.id);
      const newPos = getTodoPos(over.id);
      const updatedTodos = arrayMove(todos, originalPos, newPos);
      saveTodosToLocalStorage(updatedTodos);
      return updatedTodos;
    });
  };

  return (
    <div className="h-full flex flex-col items-center m-8">
      <h1 className="font-serif font-bold m-4 p-2 text-3xl sm:text-5xl">Todo React App</h1>
      <div className="h-screen">
        <Input onSubmit={addTodo} newTodo={newTodo} setNewTodo={setNewTodo}/>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <Column id="toDo" todos={todos} toggleEditMode={toggleEditMode} editMode={editMode} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}/>
        </DndContext>
      </div>
    </div>
  );
}
