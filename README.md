# Dream Land <img src="https://www.svgrepo.com/show/390315/stars.svg" height="40">

## React - Tailwind CSS Project with Firebase, Firebase Storage, Redux, and More

This project is a web application built using **React**, **Tailwind CSS**, **Firebase**, **Redux**, **Redux Thunk**, and various React hooks. The application implements modern state management with Redux and handles side effects with `useEffect`, while Firebase is used for data storage and authentication.

## Project Overview

This project leverages the power of **React** to build interactive UIs, **Tailwind CSS** for efficient styling, and **Firebase** for backend services like authentication and data storage. The state management is handled using **Redux** with **Redux Thunk** middleware for async operations. Additionally, the project utilizes various React hooks to manage component behavior and routing.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Firebase**: Backend-as-a-Service (BaaS) for authentication and cloud data storage.
- **Redux**: State management library for JavaScript apps.
- **Redux Thunk**: Middleware for handling asynchronous actions in Redux.
- **React Router**: Declarative routing for React applications.
- **React Hooks**: A set of hooks used for managing state and side effects.
- **uuidv4 & nanoid**: Unique ID generation for various components.
- **fortawesome**: FontAwesome icon support.
- **CKEditor**: A powerful WYSIWYG text editor.
- **DOMPurify**: Ensures safe HTML rendering by preventing XSS attacks.

## React Hooks Used

1. **`useState`**

   - **Description**: Used to manage local state in React components.
   - **Example**:
     ```javascript
     const [count, setCount] = useState(0);
     const increment = () => setCount(count + 1);
     ```

2. **`useReducer`**

   - **Description**: Used for more complex state management, especially when the state transitions are more intricate.
   - **Example**:
     ```javascript
     const initialState = { count: 0 };
     function reducer(state, action) {
       switch (action.type) {
         case "increment":
           return { count: state.count + 1 };
         default:
           throw new Error();
       }
     }
     const [state, dispatch] = useReducer(reducer, initialState);
     ```

3. **`useContext`**

   - **Description**: Shares state globally across components without passing props manually (prop drilling).
   - **Example**:
     ```javascript
     const ThemeContext = React.createContext("light");
     const theme = useContext(ThemeContext);
     ```

4. **`useEffect`**

   - **Description**: Performs side effects such as data fetching or manually modifying the DOM. It runs after the component renders.
   - **Example**:
     ```javascript
     useEffect(() => {
       console.log("Component mounted or updated");
     }, [dependency]);
     ```

5. **`useRef`**

   - **Description**: Accesses DOM elements or stores mutable values that do not trigger a re-render.
   - **Example**:
     ```javascript
     const inputRef = useRef(null);
     const focusInput = () => {
       inputRef.current.focus();
     };
     ```

6. **`useSearchParams`**

   - **Description**: A React Router hook for reading and updating the query string in the URL.
   - **Example**:
     ```javascript
     const [searchParams, setSearchParams] = useSearchParams();
     const searchTerm = searchParams.get("search");
     ```

7. **`useFetch`**

   - **Description**: Custom hook to fetch data asynchronously.
   - **Example**:
     ```javascript
     const { data, loading, error } = useFetch("https://api.example.com/data");
     ```

8. **`useParams`**

   - **Description**: Extracts route parameters from the URL.
   - **Example**:
     ```javascript
     const { id } = useParams();
     ```

9. **`useMemo`**

   - **Description**: Optimizes performance by memoizing the result of a function, preventing unnecessary recalculations when dependencies do not change. It is useful for expensive computations or avoiding unnecessary re-renders.
   - **Example**:
     ```javascript
     function ExpensiveCalculation({ num }) {
       const computedValue = useMemo(() => {
         console.log("Computing...");
         return num * 2;
       }, [num]);
     }
     ```

## Firebase Integration

Firebase is used for authentication and cloud storage in this project. You can set up Firebase by following these steps:

1. Install Firebase SDK:
 ```bash
 npm install firebase
````

## Redux Integration

Redux is used to manage the global state in the application. You can set up Redux by following these steps:

1. Install Redux SDK:
   ```bash
   npm install redux react-redux
   ```

## Redux Thunk Integration

Redux Thunk is a middleware that enables async logic in Redux. You can set up Redux Thunk by following these steps:

1. Install Redux Thunk SDK:
   ```bash
   npm install redux-thunk
   ```

## React Router Integration

React Router is used to navigate between different views. You can set up React Router by following these steps:

1. Install React Router SDK:

   ```bash
   npm install react-router-dom
   ```

## React Spinners Integration

React Spinners is a library for customizable loading animations. You can set up React Spinners by following these steps:

1. Install React Spinners SDK:

   ```bash
   npm install react-spinners
   ```

## UUID Integration

UUID are used for generating unique IDs. You can set up UUID by following these steps:

1. Install UUID SDK:
   ```bash
   npm install uuid
   ```

## NANOID Integration

nanoid are used for generating unique IDs. You can set up UUID by following these steps:

1. Install UUID SDK:

   ```bash
   npm install nanoid
   ```

## Font Awesome Integration

Font Awesome is used for scalable vector icons. You can set up Font Awesome by following these steps:

1. Install Font Awesome SDK:

   ```bash
   npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
   ```

## CKEditor Integration

KEditor provides a feature-rich text editor for content creation. You can set up CKEditor by following these steps:

1. Install CKEditor SDK:

   ```bash
   npm install @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
   ```

## DOMPurify Integration

DOMPurify is used to sanitize HTML inputs and prevent XSS attacks. You can set up DOMPurify by following these steps:

1. Install DOMPurify SDK:

   ```bash
   npm install dompurify
   ```

## Tailwind CSS Integration

Tailwind CSS is a utility-first CSS framework for designing the UI efficiently. You can set up Tailwind CSS by following these steps:

1. Install Tailwind CSS SDK:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

## Project Setup

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aysenuraydin/quicknote-React.git
   ```
