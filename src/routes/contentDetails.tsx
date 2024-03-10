import { useParams } from 'react-router-dom';
import api from '../api/index';
import { useEffect, useState } from 'react';
import { Movie } from '../api/content';

const ContentCategory = (): ReactElement => {
  let { contentId } = useParams();
  const [content, setContentData] = useState<Movie | {}>({});

  useEffect(() => {
    const getMovie = async () => {
      const data = await api.content.getBytitle(contentId);
      setContentData(data);
    };

    getMovie();
  }, []);

  return (
    <div>
      <h1>{contentId}</h1>
      {content ? (
        <div>
          <div>
            <img src={content?.image} alt={`Movie poster of ${content?.title}`} />
          </div>
          <div>
            <h2>{content?.tite}</h2>
            <span>{content?.rating}</span>
          </div>

          <div>{content?.description}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContentCategory;
