import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
// import HomePage from './pages/HomePage';
//import LoginPage from './Login/Loginpage';
//import Navigate from './Navigate';
//import SignUpPage from './Signup/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    /{/*<App /> */}
   
       {/* { <Navigate/> }   */}
    {/* {<SignUpPage/>} */}
    {/* <HomePage/> */}
    {  <App/> }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
