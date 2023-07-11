import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Carousel from "@/components/carousel";

export default function Directors({ directorIds, directors }) {
  const [moreFrom, setMoreFrom] = useState(null);
  const apiKey = process.env.TMD_API_KEY;

  //Fetch movies of a single director
  async function getMoviesByDirector(directorId) {
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_crew=${directorId}&sort_by=popularity.desc&include_adult=false`;
    let res = await fetch(apiUrl);
    const data = await res.json();
    return data.results;
  }

  //Fetch movies of all directors
  const fetchDirectorMovies = async () => {
    const moviesFetched = await Promise.all(
      directorIds?.map(async (id) => {
        const directorMovies = await getMoviesByDirector(id);
        return { directorId: id, movies: directorMovies };
      })
    );
    setMoreFrom(moviesFetched);
  };

  //Render data on change in director ids
  useEffect(() => {
    fetchDirectorMovies();
  }, [directorIds]);

  return (
    <div>
      {moreFrom?.map((director) => (
        <Carousel
          key={director?.directorId}
          heading={`More from ${directors[director?.directorId]}`}
          data={director?.movies}
        />
      ))}
    </div>
  );
}
