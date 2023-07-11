import Link from "next/link";
import Image from "next/image";
import Star from "@/assets/star.svg";

export default function Card({ cardData }) {
  //Component for movie cards
  return (
    <>
      {cardData?.map((movie) => (
        <Link key={movie?.id} href={`/movie/${movie?.id}`}>
          <div className="group">
            <div className="flex flex-col justify-end mx-auto w-full h-full max-h-[35rem] max-w-fit overflow-hidden">
              {/* Movie Poster with Fallback Image */}
              {movie?.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  alt={movie?.title}
                  className="rounded-lg h-full object-cover object-center group-hover:opacity-75"
                  width={400}
                  height={600}
                  style={{ margin: "auto" }}
                />
              ) : (
                <Image
                  src={`https://placeholder.pics/svg/500x750/E0F9FF/000000-E0F9FF/${movie?.title}`}
                  alt={movie?.title}
                  className="rounded-lg h-full object-cover object-center group-hover:opacity-75"
                  width={400}
                  height={600}
                  style={{ margin: "auto" }}
                />
              )}
              {/* Movie Details */}
              <h3 className="mt-3 text-md text-white">{movie?.title}</h3>
              <div className="flex flex-row justify-between">
                <p className="mt-1 text-md font-medium text-white">
                  {parseInt(movie?.release_date)}
                </p>
                <p className="text-yellow-400 flex flex-row justify-between mt-1 text-md font-medium text-white">
                  <Image
                    src={Star}
                    alt="Star Icon"
                    className="mr-2"
                    width={20}
                    height={20}
                    style={{ color: "#dddd0e" }}
                  />
                  {movie?.vote_average?.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
