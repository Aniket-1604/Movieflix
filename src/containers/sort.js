import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Year from "@/components/year";
import Genre from "@/components/genre";
import Rating from "@/components/rating";

export default function Sort({ setFilterResults }) {
  const [genres, setGenres] = useState([]);
  const [filters, setFilters] = useState({
    year: "",
    genre: "",
    rating: "",
  });
  const apiKey = process.env.TMD_API_KEY;

  //Fetch the list of genres from the API
  const getGenres = async () => {
    let apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    let res = await fetch(apiUrl);
    let data = await res.json();
    setGenres(data.genres);
  };

  //Fetch the filtered movies from the API
  const getFilterResults = async (apiUrl) => {
    let res = await fetch(apiUrl);
    let data = await res.json();
    setFilterResults(data.results);
  };

  //Initial render for the page
  useEffect(() => {
    getGenres();
  }, []);

  //Storing filter values
  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  //Fetch filter results on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { year, genre, rating } = filters;

    //Construct the API URL with the selected filters
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false`;
    if (year) {
      apiUrl += `&primary_release_year=${year}`;
    }
    if (genre) {
      apiUrl += `&with_genres=${genre}`;
    }
    if (rating) {
      apiUrl += `&vote_average.gte=${rating}&vote_average.lte=${
        parseInt(rating, 10) + 1
      }`;
    }

    getFilterResults(apiUrl);
  };

  return (
    <form
      id="filter-bar"
      className="md:sticky md:top-6 z-10 items-center rounded-xlg mt-10 mx-10 md:mx-12 lg:mx-36 flex flex-col justify-evenly md:flex-row p-5 card"
      onSubmit={handleSubmit}
    >
      <Year filters={filters} handleInputChange={handleInputChange} />
      <Genre
        filters={filters}
        handleInputChange={handleInputChange}
        genres={genres}
      />
      <Rating filters={filters} handleInputChange={handleInputChange} />
      <div className="pt-5 md:pt-0">
        <button
          className="btn btn-active bg-gray-900 rounded-full"
          role="button"
          aria-pressed="true"
        >
          Apply
        </button>
      </div>
    </form>
  );
}
