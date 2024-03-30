/* eslint-disable react/prop-types */
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Todo } from "./Todo";


export const Column = ({ todos, toggleEditMode, editMode, deleteTodo, toggleCompleted}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 w-80 max-w-screen-md flex flex-col gap-4 sm:w-[500px]">
      <SortableContext items={todos} strategy={verticalListSortingStrategy}>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} toggleEditMode={toggleEditMode} editMode={editMode} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}/>
        ))}
      </SortableContext>
    </div>
  );
};
