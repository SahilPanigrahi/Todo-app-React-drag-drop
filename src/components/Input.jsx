// eslint-disable-next-line react/prop-types
export const Input = ({ onSubmit, newTodo, setNewTodo }) => {
  const handleSubmit = () => {
    if (!newTodo) return;

    onSubmit(newTodo);

    setNewTodo("");
  };

  return (
    <div className="p-4 flex gap-4 sm:w-[500px]">
      <input
        className="text-black rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:ring focus:border-blue-300 sm:w-[400px]"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="ml-2 p-2 border-none py-2 px-4 bg-blue-600 text-white rounded-md sm:font-bold"
      >
        Add
      </button>
    </div>
  );
};
