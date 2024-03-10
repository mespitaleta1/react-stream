import { Link } from 'react-router-dom';

const Card = ({ title, image }: { title: string; image: string }) => {
  return (
    <Link to={`/content/${title}`} key={title}>
      <li className="sm:mb-1 relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
        <img
          src={image}
          alt={`poster of ${title}`}
          className=" max-w-xs transition duration-300 ease-in-out hover:scale-110 w-full"
        />
      </li>
    </Link>
  );
};

export default Card;
