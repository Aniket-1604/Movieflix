import Image from "next/image";

export default function Detail({ movie, directorList }) {
  //Create comma separated lists for genres and directors
  const genreList = movie?.genres?.map((item) => item?.name);
  const genres = genreList?.join(", ");
  const directors = directorList?.join(", ");

  //Component for movie details
  return (
    <div className="px-4 pt-6 pb-10 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
      <div className="flex flex-col sm:flex-row  items-center mx-auto max-w-8xl">
        <div className="w-full max-w-2xl justify-center">
          {/* Movie Poster with Fallback Image */}
          {movie?.poster_path ? (
            <Image
              className="hover:shadow-sky-500 hover:shadow-2xl transition-shadow duration-300 ease-in-out object-cover max-h-screen object-center mx-auto rounded-lg"
              src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`}
              alt={movie?.title}
              width={400}
              height={600}
            />
          ) : (
            <Image
              className="hover:shadow-sky-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out object-cover max-h-screen object-center mx-auto rounded-lg"
              src={`https://placeholder.pics/svg/400x600/E0F9FF/000000-E0F9FF/${movie?.title}`}
              alt={movie?.title}
              width={400}
              height={600}
            />
          )}
        </div>
        {/* Movie Details */}
        <div className="text-white pl-0 w-fit sm:pl-4 md:pl-8 pt-6 pb-4 space-y-2 max-w-md">
          <h1 className="underline decoration-white underline-offset-8 text-cyan-500 md:text-2xl font-bold">
            Title
          </h1>
          <p className="text-cyan-100 text-sm md:text-md lg:text-lg text-left">
            {movie?.title}
          </p>
          <h1 className="underline decoration-white underline-offset-8 text-cyan-500 md:text-2xl font-bold">
            Overview
          </h1>
          <p className="text-cyan-100 text-sm md:text-md lg:text-lg text-left">
            {movie?.overview}
          </p>
          <h1 className="underline decoration-white underline-offset-8 text-cyan-500 md:text-2xl font-bold">
            Release Date
          </h1>
          <p className="text-cyan-100 text-sm md:text-md lg:text-lg text-left">
            {movie?.release_date}
          </p>
          <h1 className="underline decoration-white underline-offset-8 text-cyan-500 md:text-2xl font-bold">
            Runtime
          </h1>
          <p className="text-cyan-100 text-sm md:text-md lg:text-lg text-left">
            {movie?.runtime} min
          </p>
          <h1 className="underline decoration-white underline-offset-8 text-cyan-500 md:text-2xl font-bold">
            Genres
          </h1>
          <p className="text-cyan-100 text-sm md:text-md lg:text-lg text-left">
            {genres}
          </p>
          <h1 className="underline decoration-white underline-offset-8 text-cyan-500 md:text-2xl font-bold">
            Directors
          </h1>
          <p className="text-cyan-100 text-sm md:text-md lg:text-lg text-left">
            {directors}
          </p>
          <h1 className="underline decoration-white underline-offset-8 text-cyan-500 md:text-2xl font-bold">
            Rating
          </h1>
          <p className="text-cyan-100 text-sm md:text-md lg:text-lg text-left">
            {movie?.vote_average?.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
}
