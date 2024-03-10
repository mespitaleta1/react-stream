import api from '../api/';
import { useState, useEffect } from 'react';
import type { Movie } from '../api/movie';
import Card from '../components/Card';

const Movies = () => {
  const [content, setContent] = useState<Movie | []>([]);

  useEffect(() => {
    const getData = async () => {
      const content = await api.content.getAll();
      setContent(content);
    };
    getData();
  }, []);

  return (
    <div className="mt-48 mx-auto w-6/12 ">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center mb-48">MOVIES</h1>

      <div>
        {content.length > 0 ? (
          <ul className="mt-10 grid gap-x-8 gap-y-4 grid-cols-4">
            {content.map((item) => (
              <Card title={item.title} image={item.image} />
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
