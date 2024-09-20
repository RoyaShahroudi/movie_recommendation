import React from "react";
import Container from "@/app/_components/container";
import MovieList from "@/app/_components/movieList";
import HeroPost from "@/app/_components/heroPost";
import NewTrailers from "@/app/_components/newTrailers";

const API_KEY = process.env.API_KEY

export default async function Home() {

    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = await res.json();
    const results = data.results;

    return (
        <main className="font-roboto">
            <Container>
                <div className="grid lg:grid-cols-7 lg:gap-16 md:grid-cols-6 md:gap-8 grid-cols-1">
                    <div className="col-span-2 md:order-1 order-2">
                        <NewTrailers/>
                    </div>
                    <div className="lg:col-span-5 md:col-span-4 md:order-2 order-1">
                        <HeroPost title={results[13].title} posterPath={results[13].poster_path}
                                  releaseDate={results[13].release_date} voteAverage={results[13].vote_average}/>
                        <MovieList/>
                    </div>
                </div>
            </Container>
        </main>
    );
}
