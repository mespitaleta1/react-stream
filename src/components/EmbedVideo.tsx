import { ReactElement } from 'react';

const EmbedVideo = ({ embedId }: { embedId: string }): ReactElement => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="border rounded-xl"
    />
  </div>
);

export default EmbedVideo;
