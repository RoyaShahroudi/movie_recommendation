import React from "react";
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";
import Image from "next/image";

const API_KEY = process.env.API_KEY

const NewTrailers = async () => {

    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = await res.json();
    const menuItem = data.results.slice(-2);

    return (
        <div className="mx-auto pt-12 grid md:grid-cols-1 gap-6">
            <p className="font-bold text-xl mb-2 mt-4">New Trailers</p>
            {menuItem.map(({id, title, poster_path, release_date, vote_average}: {
                id: number,
                title: string,
                poster_path: string,
                release_date: number,
                vote_average: number
            }, index: number) => {

                const date = new Date(release_date);
                const formattedDate = date.toLocaleString("en-US", {month: "short", year: "numeric"});

                return (
                    <Link href={`/movies/${id}`} key={id}>
                        <div key={index} className="rounded-xl relative h-[160px]">
                            <div
                                className="absolute z-30 bottom-[-1px] left-0 w-full px-2 h-1/3 bg-gray-500/50 backdrop-blur-sm rounded-xl text-white">
                                <div className="flex items-center justify-between h-full">
                                    <div className="px-2 w-2/3">
                                        <p className="text-lg font-semibold truncate">{title}</p>
                                        <p className="text-sm font-light text-gray-300">{formattedDate}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm font-lght text-gray-100 mr-1">
                                            {Number((vote_average).toFixed(1))}
                                        </p>
                                        <StarIcon sx={{fontSize: 18}}/>
                                    </div>
                                </div>
                            </div>
                            <Image src={`https://image.tmdb.org/t/p/original${poster_path}`}
                                   alt={title}
                                   layout="fill"
                                   objectFit="cover"
                                   className="rounded-xl"
                            />
                        </div>
                    </Link>
                );
            })}
        </div>

    );
};

export default NewTrailers;
