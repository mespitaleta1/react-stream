import EmbedVideo from '../components/EmbedVideo';
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/index';

const PlayMovie = (): ReactElement => {
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
    <div className="flex justify-between w-6/12 mx-auto mt-40">
      <EmbedVideo embedId={content.trailer} />
    </div>
  );
};
export default PlayMovie;
