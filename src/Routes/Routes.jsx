import React from 'react';
import { createBrowserRouter } from 'react-router'
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Root from '../Root';


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader:()=>fetch("booksData.json"),
                path: "/",
                Component: Home
            }
        ]
    },
])