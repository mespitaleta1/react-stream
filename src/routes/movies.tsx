import api from '../api/';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Movie } from '../api/movie';

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
              <Link to={`/content/${item.title}`} key={item.title}>
                <li className="sm:mb-1 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
                  <img
                    src={item.image}
                    alt={`poster of ${item.title}`}
                    className=" max-w-xs transition duration-300 ease-in-out hover:scale-110 w-full"
                  />
                </li>
              </Link>
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
