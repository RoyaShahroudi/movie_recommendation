import React from 'react';
import Container from "@/app/_components/container";
import NewTrailers from "@/app/_components/newTrailers";
import StarIcon from "@mui/icons-material/Star";

const API_KEY = process.env.API_KEY

const MovieDetails = async ({params}: {
    params: {
        movieId: string
    }
}) => {

    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}`)
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const movieDetails = await res.json();
    console.log("movie details: ", movieDetails)

    const date = new Date(movieDetails.release_date);
    const formattedDate = date.toLocaleString("en-US", {month: "short", year: "numeric"});


    return (
        <Container>
            <div className="grid lg:grid-cols-7 lg:gap-16 md:grid-cols-6 md:gap-8 grid-cols-1">
                <div className="col-span-2 md:order-1 order-2">
                    <NewTrailers/>
                </div>
                <div className="lg:col-span-5 md:col-span-4 md:order-2 order-1">
                    <section>
                        <div className="rounded-xl relative h-[500px] mt-9">
                            <div
                                className="absolute bottom-0 left-0 w-full px-2 h-1/3 bg-gray-500/50 backdrop-blur-sm rounded-xl text-white">
                                <div className="flex items-center justify-between h-full">
                                    <div className="px-2">
                                        <p className="text-lg font-semibold">{movieDetails.title}</p>
                                        <p className="text-sm font-light text-gray-300">{formattedDate}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm font-lght text-gray-100 mr-1">
                                            {Number((movieDetails.vote_average).toFixed(1))}
                                        </p>
                                        <StarIcon sx={{fontSize: 18}}/>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="z-10 reletive bg-gradient-to-r from-indigo-500 h-full w-full rounded-xl bg-gray-500">
                                <img
                                    className="z-0 absolute h-full w-full object-cover rounded-xl"
                                    src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                                    alt="/"
                                />
                            </div>

                        </div>
                        <div className="py-8 px-10">
                            {movieDetails.overview}
                        </div>
                    </section>
                </div>

            </div>

        </Container>
    );
};

export default MovieDetails;