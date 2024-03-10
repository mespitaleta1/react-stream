import { ReactElement, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Navbar from '../components/Navbar';

const Root = (): ReactElement => {
  const { isAuthenticated, userProfile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Navbar userName={userProfile?.firstName} imgProfile={userProfile?.image} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
