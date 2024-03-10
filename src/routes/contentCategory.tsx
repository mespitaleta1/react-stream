import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Movie } from '../api/movie';
import api from '../api/';
import Card from '../components/Card';

const ContentCategory = (): ReactElement => {
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
    <div className="mt-48 mx-auto w-6/12">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center mb-48">
        {categoryId.toUpperCase()}
      </h1>
      <div>
        {content.length > 0 ? (
          <ul className="mt-10 grid gap-x-8 gap-y-4 grid-cols-4">
            {content.map((item: { title: string; image: string }) => (
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

export default ContentCategory;
