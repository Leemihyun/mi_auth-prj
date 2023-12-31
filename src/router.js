import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import MovieList from "./pages/MovieList";
import NewsList from "./pages/NewsList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PeopleList from "./pages/PeopleList";
import CatsList from "./pages/CatsList";
import TvShowList from "./pages/TvShowList";
import ResetPassword from "./pages/ResetPassword";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MovieList />,
    },
    {
        path: '/tvshow',
        element: <TvShowList />,
    },
    {
        path: '/news',
        element: <NewsList />,
    },
    {
        path: '/people',
        element: <PeopleList />,
    },
    {
        path: '/cats',
        element: <CatsList />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element:<SignUp /> ,
    },
    {
        path: '/reset-password',
        element:<ResetPassword /> ,
    },
    {
        path: '/movie/:movieId',
        element:<Detail /> ,
    },
    {
        path: '/tv/:tvId',
        element:<Detail /> ,
    },
    {
        path: '/profile',
        element:<Profile /> ,
    },

]);

export default router;