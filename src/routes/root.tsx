import { FC, ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Root: FC = (): ReactNode => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <nav className="flex">
        <h1>ReactStream</h1>
        <Link to="/">Home</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
