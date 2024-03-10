import { useParams } from 'react-router-dom';

const ContentCategory = (): ReactElement => {
  let { contentId } = useParams();

  return (
    <div>
      <h1>Content Details page</h1>
      <div>{contentId}</div>
    </div>
  );
};

export default ContentCategory;
