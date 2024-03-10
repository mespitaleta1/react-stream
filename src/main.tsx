import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/authContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/Home';
import Movies from './routes/movies';
import LoginForm from './routes/LoginForm';
import ContentCategory from './routes/ContentCategory';
import ContentDetails from './routes/contentDetails';
import './index.css';
import PlayMovie from './routes/playMovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'category/:categoryId',
        element: <ContentCategory />,
      },
      {
        path: 'content/:contentId',
        element: <ContentDetails />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'play-movie/:contentId',
        element: <PlayMovie />,
      },
    ],
  },
  { path: '/login', element: <LoginForm /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
