Live Link: https://react-todolist-by-sahil.netlify.app/
![Screenshot 2024-03-30 233917](https://github.com/SahilPanigrahi/Todo-app-React-drag-drop/assets/119133054/6947a5ed-e1a0-4da3-ae39-8294e627089a)

React Frontend Assignment 
Build a simple yet functional Todo List application using React JS, where users can add, delete, and 
reorder tasks using drag-and-drop functionality. The application will initially fetch tasks from the 
JSONPlaceholder API to populate the todo list and then allow users to manipulate the list order as 
they prefer. 

Key Features: 
1. Fetch Todos: On application load, fetch todos from the JSONPlaceholder API and display them 
in a list. 
2. Add Todo: Implement a form at the top of the todo list to add new tasks. Adding a task appends 
it to the end of the list. 
3. Delete Todo: Each todo item should have a delete button that, when clicked, removes the item 
from the list. 
4. Drag-and-Drop Sorting: Allow users to reorder the todo list by dragging and dropping items. 
This requires integrating drag-and-drop functionality to dynamically reorder the tasks. 
5. Persistent State: While the JSONPlaceholder API does not support saving changes, simulate 
persistence by managing and updating the state within React. Ensure that the todo list order, 
additions, and deletions are preserved during the session. 
6. Responsive Design: Ensure the todo list is usable on both desktop and mobile devices, with 
touch-friendly drag-and-drop support.

Technical Requirements: 
• Use React JS for building the front-end. 
• Utilize functional components and React Hooks for state management. 
• Implement drag-and-drop functionality.  
• Fetch todos from the JSONPlaceholder API using Axios or Fetch API. 
• Style the application using CSS or Tailwind 
• Implement a "complete" feature, where users can mark todos as done, visually distinguishing 
them (e.g., strike-through text). 
• Add animations for drag-and-drop actions for a more engaging user experience. 
• Use local storage to save the state of the todo list so that the list order and changes persist 
across page reloads. 

JSONPlaceholder API Usage: 
For initial todo items, make a GET request to https://jsonplaceholder.typicode.com/todos. This will 
give you a list of placeholder todos to display. Since changes aren't persisted on the server, manage 
CRUD operations locally within your application's state.
