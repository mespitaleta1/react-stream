//import { useState, useEffect } from 'react';
//import api from './api/index';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;

/**
 *   const [user, setUser] = useState({});
  const [content, setContent] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const findUser = async () => {
      const data = await api.user.getByEmail('dknevett3@gmail.com');
      setUser(data);
    };

    const findMovieContent = async () => {
      const movieData = await api.movie.getByCategorie('Romance');
      setContent(movieData);
    };

    const findCategories = async () => {
      const data = await api.data.getAll();
      setCategories(data);
    };

    findUser();
    findMovieContent();
    findCategories();
  }, []);
 */
