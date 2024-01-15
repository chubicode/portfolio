import React from 'react';
// import React from 'react';: This line imports the React library, which is necessary for creating and working with React components.
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom';: This line imports the ReactDOM library, which is used to render React components in the DOM (Document Object Model).
import App from './@modules/App';
// import App from './@modules/App';: This line imports the App component from the specified file path. The App component is  the main component of your React application.
import "./App.css"
// import "./App.css";: This line imports the CSS file (App.css) associated with the App component. It's used for styling the App component.
import { BrowserRouter } from 'react-router-dom';

// import { BrowserRouter } from 'react-router-dom';: This line imports the BrowserRouter component from the react-router-dom library. The BrowserRouter is used for enabling routing in a React application.

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));: This line renders the App component inside the BrowserRouter and mounts it to the HTML element with the id of "root."



/*// all importations have been  done in other to work on the App.jsx files */