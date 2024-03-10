import { ReactElement, useState, useEffect } from 'react';
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
    <div>
      <div className="h-screen sm:p-auto lg:p-[10px] w-10/12 mx-auto">
        {/*header Section */}
        <div className="px-6 lg:px-8  w-8/12 mx-auto">
          <div className="max-w-2xl pt-24 text-center sm:pt-40 ml-4">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-left">ReactStream</h2>
            <p className="mt-6 text-md leading-8.5 text-slate-500 text-left w-3/5 ">
              The ultimate way to enjoy all your favorite streaming programs, we got for you the most popular and recent
              content, just pick a category and enjoy!
            </p>
          </div>
          {/*Categories Section */}
          <div className="">
            <div className="mt-40 flex">
              {categories.map((category: string, idx: number) => (
                <Link to={`/category/${category}`} key={idx} className="group relative cursor-pointer m-4">
                  <div className="w-[170px] h-[80px] rounded-lg bg-slate-300 opacity-60 border-2 border-white pt-6 hover:border-slate-400">
                    <p className="text-gray-500 text-center font-bold text-lg hover:text-slate-600">{category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
