import { useState, useEffect } from 'react';
import api from './api/index';
import './App.css';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const findUser = async () => {
      const data = await api.user.getByEmail('dknevett3@gmail.com');
      setUser(data);
    };

    findUser();
  }, []);

  return (
    <>
      <h1>Welcome to ReactStream</h1>
      <span>{user.first_name}</span>
    </>
  );
}

export default App;
