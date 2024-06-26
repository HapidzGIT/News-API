import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { useFetchEverything } from './useFetchNews/FetchNews';
import axios from 'axios';
import Loading from './components/Loading';
import {useDebounce} from 'use-debounce'

export default function PopularNews() {
  const [query, setQuery] = useState(`code`);

  // const [value] = useDebounce(query, 3000)

  const { data, isError, isFetched, isLoading, refetch } = useFetchEverything(query);

  if(isLoading) {
    return <Loading/>
  }

  if(isError) {
    return <div>NetWork ERORRR</div>;
  }

  if(!isFetched) {
    return <div>Loading...</div>
  }

  if(!data) {
return <div>No News Available</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch(query);
  }

  return (
    <div>
      <Navbar />
      <section id="Popular" className="pt-20">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-4">
                <h2  className="text-5xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-sky-600 to-cyan-900 font-bold flex items-center justify-center">
                  Cari Berita
                </h2>
                <form onSubmit={handleSubmit} className="border-b pb-10 border-slate-500 flex gap-3 items-center justify-center mt-10">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={query}
                    className="shadow w-full max-w-lg py-3.5 bg-slate-300 rounded-md shadow-slate-200 placeholder:px-3 placeholder:text-lg placeholder:font-semibold"
                    placeholder="Search all news"
                    onChange={(e) => setQuery(e.target.value)}
                  />
           <button type="submit" className="px-5 py-3 bg-cyan-400 rounded-md text-xl font-semibold">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
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
      </section>
    </div>
  );
}
