import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AllPizza from './pages/AllPizza';
import orderConfirmation from "./pages/orderConfirmation"
import Contact from './pages/Contact';
import About from './pages/About';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    createBrowserRouter,
    RouterProvider
  } from 'react-router-dom';
import SearchResult from './pages/SearchResult';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "Pizza",
        element: <AllPizza />,
    },
    {
        path: "orderConfirmation",
        element: <orderConfirmation />,
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "searchResult",
        element: <SearchResult />
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

