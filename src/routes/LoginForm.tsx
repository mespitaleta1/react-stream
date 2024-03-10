import { useState, useEffect, FormEvent } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPsw, setUserPsw] = useState<string>('');
  const { login, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
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

  const handleSubmit = (e: FormEvent) => {
    e?.preventDefault();
    const isFormValid = !isEmptyField(userEmail, userPsw) && isValidEmail(userEmail);
    if (isFormValid) {
      login(userEmail, userPsw);
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-black">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  className="border rounded-md border-black p-1 w-full p-2"
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
                  className="border rounded-md border-black p-1 w-full p-2"
                  type="password"
                  autoComplete="password"
                  onChange={(e) => setUserPsw(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>

        <div>
          <button
            className="flex lg:w-[385px] w-[200px] justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-4"
            onClick={() => handleSubmit()}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
