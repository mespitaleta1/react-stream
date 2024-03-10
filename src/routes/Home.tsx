import { useState, useEffect, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/index';

const Home = (): ReactElement => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await api.data.getAll();
      setCategories(data);
    };

    getCategories();
  }, []);

  return (
    <div className="h-screen sm:p-auto lg:p-[10px]">
      {/*header Section */}
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
          <h2 className="text-4xl font-bold tracking-tight text-slate-700 sm:text-6xl">Welcome to ReactStream</h2>
          <p className="mt-6 text-lg leading-8 text-slate-500">
            The ultimate way to enjoy all your favorite streaming programs, we got for you the most popular and recent
            content, just pick a category and enjoy!
          </p>
        </div>
      </div>
      {/*Categories Section */}
      <div className="m-[50px]">
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {categories.map((category: string, idx: number) => (
            <Link to={`/category/${category}`} key={idx} className="group relative cursor-pointer m-4">
              <div className="max-w-sm p-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                <p className="text-white text-center text-4xl font-bold tracking-tight hover:text-gray-300">
                  {category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
