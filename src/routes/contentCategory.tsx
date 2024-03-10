import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Movie } from '../api/movie';
import api from '../api/';

const ContentCategory = (): React.ReactElement => {
  let { categoryId } = useParams();
  const [content, setContent] = useState<Movie | []>([]);

  useEffect(() => {
    const getData = async () => {
      const content = await api.content.getByCategory(categoryId);
      setContent(content);
    };
    getData();
  }, []);

  return (
    <div className="mt-48 mx-auto w-6/12 ">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center mb-48">
        {categoryId.toUpperCase()}
      </h1>

      <div>
        <h3 className=" text-lg leading-8 font-bold text-gray-800">Movies</h3>
        {content.length > 0 ? (
          <ul className="mt-10 flex justify-start">
            {content.map((item) => (
              <Link to={`/content/${item.title}`} key={item.title}>
                <li className="sm:mb-1 mx-1 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                  <img
                    src={item.image}
                    alt={`poster of ${item.title}`}
                    className=" max-w-xs transition duration-300 ease-in-out hover:scale-110"
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
}; //w-[1007px]

export default ContentCategory;
