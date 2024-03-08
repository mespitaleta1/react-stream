import { useState, useEffect } from 'react';
import api from './api/index';
import './App.css';

function App() {
  const [user, setUser] = useState({});
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

  console.log('categories=>', categories);

  return (
    <>
      <h1>Welcome to ReactStream</h1>
      <span>{user.first_name}</span>
      <div>
        {categories.map((categorie) => (
          <p>{categorie}</p>
        ))}
      </div>
      <ul>
        {content.map((item) => {
          return (
            <li key={item.id} className="border-slate-950 border-2 m-2 w-[300px]">
              <div>
                <img src={item.image} alt={`movie poster of ${item.movie}`} />
              </div>
              <div>
                <h3>{item.movie}</h3>
                <p>{item.description}</p>
                <span>{item.rating}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
