import * as React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPsw, setUserPsw] = useState<string>('');
  const { login, isAuthenticated, error } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      alert('Redirecting to home');
    }

    if (error) {
      alert(error);
    }
  }, [isAuthenticated, error]);

  const isValidEmail = (email: string) => {
    const emailRegex = /(@gmail|@hotmail)\.com$/i;
    if (email && !emailRegex.test(email)) {
      alert('Must be a valid email to Login');
      return false;
    }

    return true;
  };

  const isEmptyField = (email: string, password: string) => {
    if (!email || !password) {
      alert('Email and password are required');
      return true;
    }

    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault();
    const isFormValid = !isEmptyField(userEmail, userPsw) && isValidEmail(userEmail);
    if (isFormValid) {
      login(userEmail, userPsw);
    }
  };

  return (
    <div>
      <form className="space-y-6" accion="">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              className="border border-black p-1 w-[300px]"
              type="email"
              autoComplete="email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              className="border border-black p-1 w-[300px]"
              type="password"
              autoComplete="password"
              onChange={(e) => setUserPsw(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="border border-slate-200 p-1 bg-slate-200" onClick={() => handleSubmit()}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
