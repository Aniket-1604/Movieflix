import Head from "next/head";
import { useState } from "react";
import fetch from "isomorphic-unfetch";
import InfiniteScroll from "react-infinite-scroll-component";
import Hero from "@/components/hero";
import Search from "@/containers/search";
import Card from "@/components/card";
import Nav from "@/components/nav";

var currentPage = 1;
export default function Home({ popularMovies }) {
  const [movies, setMovies] = useState(popularMovies);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = process.env.TMD_API_KEY;

  //Fetch more movies for homepage
  const onLoadMore = async () => {
    currentPage = currentPage + 1;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}&include_adult=false`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    setMovies((movies) => [...movies, ...data.results]);
  };

  return (
    <>
      <Head>
        <title>Movieflix</title>
      </Head>
      <Hero />
      {/* Search Bar */}
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
      />
      {/* Popular Movies Cards */}
      <div className="mx-auto max-w-2xl px-6 py-24 -mt-12 md:mt-0 md:px-4 md:py-16 lg:max-w-7xl lg:px-8">
        {!searchTerm ? (
          <InfiniteScroll
            dataLength={movies?.length}
            next={onLoadMore}
            hasMore={true}
            scrollThreshold="500px"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <Card cardData={movies} />
            </div>
          </InfiniteScroll>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Card cardData={searchResults} />
          </div>
        )}
      </div>
      {/* Navbar */}
      <Nav activePage={"Home"} />
    </>
  );
}

//Fetch static props for application build
export async function getStaticProps() {
  const apiKey = process.env.TMD_API_KEY;
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1&include_adult=false`;
  const res = await fetch(apiUrl);
  const output = await res.json();
  const data = JSON.parse(JSON.stringify(output));

  return {
    props: {
      popularMovies: data.results,
    },
  };
}
