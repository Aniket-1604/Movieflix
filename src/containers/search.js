import Image from "next/image";
import { useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Magnify from "@/assets/magnify.svg";

export default function Search({
  searchTerm,
  setSearchTerm,
  setSearchResults,
}) {
  const apiKey = process.env.TMD_API_KEY;

  //Fetch search results
  async function getSearchResults() {
    if (searchTerm) {
      let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&sort_by=popularity.desc&include_adult=false`;
      let res = await fetch(apiUrl);
      const data = await res.json();
      setSearchResults(data.results);
    } else {
      setSearchResults([]);
    }
  }

  //Re-render on change in search term
  useEffect(() => {
    getSearchResults();
  }, [searchTerm]);

  return (
    <div className="sticky top-6 z-10 px-5 pt-3 max-w-md mx-auto mt-10">
      <div className="relative flex items-center w-full h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center ml-2 h-full w-12 text-gray-900">
          <Image src={Magnify} alt="Magnify Icon" width={24} height={24} />
        </div>
        <input
          className="h-full w-full outline-none text-sm placeholder-gray-900 text-gray-900 pr-2"
          type="text"
          placeholder="Search Movies.."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
