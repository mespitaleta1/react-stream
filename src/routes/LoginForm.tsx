import { ReactElement, useState, useEffect, FormEvent } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';

const REQUIRED_MSG = 'Please fill this field to continue';
const INVALID_EMAIL_MSG = 'Please provide a valid email address';

interface FormError {
  email: string;
  password: string;
}

const LoginForm = (): ReactElement => {
  const navigate = useNavigate();
  const { login, isAuthenticated, error } = useAuth();
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPsw, setUserPsw] = useState<string>('');
  const [formError, setFormError] = useState<FormError>({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, error]);

  const validation = (email: string, password: string) => {
    const errors = {
      email: '',
      password: '',
    };

    const emailRegex = /(@gmail|@hotmail)\.com$/i;

    if (email && !emailRegex.test(email)) {
      errors.email = INVALID_EMAIL_MSG;
    }

    if (!email) {
      errors.email = REQUIRED_MSG;
    }

    if (!password) {
      errors.password = REQUIRED_MSG;
    }

    return errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e?.preventDefault();

    const errors = validation(userEmail, userPsw);

    if (errors.email || errors.password) {
      setFormError(errors);
      return;
    }

    setFormError(errors);
    login(userEmail, userPsw);
  };

  return (
    <div className="">
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-24 lg:px-8 mt-30 border-2 border:bg-gray-400 border rounded-lg w-1/4 mt-40 mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 text-black">Sign in to your account</h2>

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
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                    }}
                  />
                  {formError.email && <p className={`mt-2 text-pink-600 text-sm`}>{formError.email}</p>}
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
                    onChange={(e) => {
                      setUserPsw(e.target.value);
                    }}
                  />
                  {formError.password && <p className={`mt-2 text-pink-600 text-sm`}>{formError.password}</p>}
                </div>
              </div>
            </form>
          </div>

          {error && <Alert title="Invalid loging credentials" description="email or password are incorrect." />}

          <div className="mt-10 w-auto">
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => handleSubmit()}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
