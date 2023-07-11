import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import Detail from "@/components/detail";
import Carousel from "@/components/carousel";
import Directors from "@/containers/directors";
import Nav from "@/components/nav";

export default function Movie({}) {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const router = useRouter();
  const id = router.query.movieID;
  const apiKey = process.env.TMD_API_KEY;
  const directors = {};

  //Fetch movie data and cast
  async function fetchMovie() {
    let apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&include_adult=false`;
    let res = await fetch(apiUrl);
    let data = await res.json();
    setMovie(data);

    apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
    res = await fetch(apiUrl);
    data = await res.json();
    setCredits(data);
  }

  //Fetch similar movies
  async function getSimilarMovies() {
    let apiUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&include_adult=false`;
    let res = await fetch(apiUrl);
    let data = await res.json();
    setSimilarMovies(data.results);
  }

  //Render data on change in movie ID
  useEffect(() => {
    fetchMovie();
    getSimilarMovies();
  }, [id]);

  //Create an object with director ids as keys and director names as values
  credits?.crew?.forEach((crewMember) => {
    if (crewMember.job === "Director") {
      directors[crewMember.id] = crewMember.name;
    }
  });

  //Extract director ids and director names from directors object
  const directorList = Object.entries(directors)?.map(([key, value]) => value);
  const directorIds = Object.entries(directors)?.map(([key, value]) => key);

  return (
    <>
      <Head>
        <title>{movie?.title}</title>
      </Head>
      {/* Movie Details */}
      <Detail movie={movie} directorList={directorList} />
      {/* Movie Cast */}
      <Carousel heading={"Cast"} data={credits?.cast} movieIdCast={id} />
      {/* Similar Movies */}
      <Carousel heading={"Similar Movies"} data={similarMovies} />
      {/* More Movies from the Directors */}
      <Directors directorIds={directorIds} directors={directors} />
      {/* Navbar */}
      <Nav />
    </>
  );
}
