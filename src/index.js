import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/home/Home';
import Destination from './components/destination/Destination';
import Crew from './components/crew/Crew';
import Technology from './components/technology/Technology';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home/>} />
      <Route path='destination' element={<Destination/>} />
      <Route path='crew' element={<Crew/>} />
      <Route path='technology' element={<Technology/>} />
    </Route>
  )
)


root.render(
  <React.StrictMode>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
