import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/index';
import { Movie } from '../api/content';

const ContentCategory = (): ReactElement => {
  let { contentId } = useParams();
  const [content, setContentData] = useState<Movie | {}>({});

  useEffect(() => {
    const getMovie = async () => {
      const data = await api.content.getBytitle(contentId);
      setContentData(data);
    };

    getMovie();
  }, []);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-20">
        {/*Content movie  section*/}
        {content ? (
          <div className="relative isolate overflow-hidden pt-14">
            <img
              src={content.image}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-fill aspect-auto opacity-50 shadow-[inset_-12px_-8px_40px_#46464620]"
            />
            {/*Info section */}
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative m-[200px]">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center absolute bottom-0 right-10">
                <div class="text-left">
                  <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">{contentId}</h1>

                  <div className="mt-10 flex flex-col items-start justify-start justify-center gap-x-6">
                    {/*RATING*/}
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <p className="ms-2 text-sm font-bold text-gray-900 dark:text-black">{content.rating}</p>
                    </div>

                    <p className="text-sm font-semibold leading-6 text-black">{content.description}</p>

                    {/*watch now button */}
                    <div className="mt-8 flex">
                      <div className="mr-2 flex rounded-md bg-indigo-500 px-24 py-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
                        </svg>

                        <a href="#" className="ml-2 tracking-wide">
                          WATCH NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                  aria-hidden="true"
                >
                  <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/*end info section */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
};

export default ContentCategory;
