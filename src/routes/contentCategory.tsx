import { ReactElement, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Movies } from '../api/movie';
import api from '../api/';

const ContentCategory = (): ReactElement => {
  let { categoryId } = useParams();
  const [content, setContent] = useState<Movies | []>([]);

  useEffect(() => {
    const getData = async () => {
      const content = await api.content.getByCategory(categoryId);
      setContent(content);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>{categoryId}</h1>
      {content.length > 0 ? (
        <ul>
          {content.map((item) => (
            <Link to={`/content/${item.title}`} key={item.title}>
              {item.title}
            </Link>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContentCategory;
