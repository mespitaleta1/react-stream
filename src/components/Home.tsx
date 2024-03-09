import { useState, useEffect, ReactElement } from 'react';
import api from '../api/index';

const Home = (): ReactElement => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const findCategories = async () => {
      const data = await api.data.getAll();
      setCategories(data);
    };
    findCategories();
  }, []);

  return (
    <div>
      <div>
        <h1>Welcome to ReactStream</h1>
        <span>Enjoy the best movie content, pick a categorie</span>
      </div>

      <div>
        <ul>
          {categories.map((categorie: string, idx: number) => (
            <li key={idx}>{categorie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
