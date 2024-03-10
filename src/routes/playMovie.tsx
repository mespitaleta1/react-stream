import EmbedVideo from '../components/EmbedVideo';
import { useParams } from 'react-router-dom';

const PlayMovie = () => {
  let { contentId } = useParams();

  return (
    <div>
      <EmbedVideo embedId={contentId} />
    </div>
  );
};
export default PlayMovie;
