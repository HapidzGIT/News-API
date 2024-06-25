import React from 'react';
import Loading from './components/Loading';
import { FetchNews } from './useFetchNews/FetchNews';
import { Navbar } from './components/Navbar';
export default function AllNews() {
  const { data, isError, isLoading, error } = FetchNews();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>NetWork ERORRR</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  console.log(data);
  return (
    <>
      <Navbar />
      <div className="container py-20">
        <div className="flex flex-wrap">
          <h1 className="px-4 mb-7 text-3xl font-bold ">Headline News</h1>
          <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.map((item, index) => (
              <div key={index} className="border border-black p-3 rounded-md">
                <div className="rounded-md overflow-hidden max-w-30 max-h-[4 0vh]">
                  {' '}
                  <img src={item.urlToImage} alt={item.author} />
                </div>
                <h1 className="text-xl py-4 font-bold">Author : {item.author}</h1>
                <h2 className="text-ellipsis text-lg font-semibold pb-3 truncate">Title : {item.title}</h2>
                <p className="text-ellipsis text-base font-semibold text-slate-500">{item.description}</p>
                <a href={item.url} target="_blank" className=" underline text-xl font-extrabold ">
                  Read more
                </a>
                <h4 className="text-md font-semibold py-3">Published At : {item.publishedAt}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
