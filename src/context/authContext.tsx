import { createContext, ReactElement, useContext, useState } from 'react';
import api from '../api/index';
import { User } from '../api/user';

interface AuthContextType {
  isAuthenticated: boolean;
  userProfile: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  error: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<User>();
  const [error, setError] = useState<string>('');

  const login = async (email: string, password: string) => {
    const user = await api.auth.login(email, password);

    if (user) {
      setIsAuthenticated(true);
      setUserProfile(user);
    } else {
      setError('email or password are incorrect');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userProfile, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('The AuthProveder must include useAuth');
  }

  return context;
};
