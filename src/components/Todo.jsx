/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Todo = ({ id, title, completed, toggleEditMode, editMode, deleteTodo, toggleCompleted }) => {
  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleComplete = () => {
    toggleCompleted(id);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, disabled: editMode });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className={`p-2.5 items-center flex flex-col text-left rounded-xl hover:shadow-red-700 hover:shadow-md cursor-grab shadow-sm w-full overflow-y-auto break-all whitespace-pre-wrap touch-action-none bg-black text-white ${completed ? 'line-through' : ''}`}
    >{title}</div>
      <div className="flex justify-around">
        <button onClick={handleComplete}
        className="text-black bg-yellow-400 p-1 rounded opacity-60 hover:opacity-100">{completed ? 'Undo' : 'Complete'}</button>
        <button onClick={handleDelete} className="text-black bg-orange-700 p-1 rounded opacity-60 hover:opacity-100 ">Delete</button>
      </div>
    </>
  );
};










