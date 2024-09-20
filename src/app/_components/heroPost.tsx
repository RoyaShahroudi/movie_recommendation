import React from 'react';
import StarIcon from "@mui/icons-material/Star";

type Props = {
    title: string,
    posterPath: string,
    releaseDate: string,
    voteAverage: number,
}

function HeroPost({
                      title,
                      posterPath,
                      releaseDate,
                      voteAverage,
                  }: Props) {

    const date = new Date(releaseDate);
    const formattedDate = date.toLocaleString("en-US", {month: "short", year: "numeric"});

    return (
        <section>
            <div className="rounded-xl relative h-80 mt-9">
                <div
                    className="absolute bottom-0 left-0 w-full px-2 h-1/3 bg-gray-500/50 backdrop-blur-sm rounded-xl text-white">
                    <div className="flex items-center justify-between h-full">
                        <div className="px-2">
                            <p className="text-lg font-semibold">{title}</p>
                            <p className="text-sm font-light text-gray-300">{formattedDate}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm font-lght text-gray-100 mr-1">
                                {Number((voteAverage).toFixed(1))}
                            </p>
                            <StarIcon sx={{fontSize: 18}}/>
                        </div>
                    </div>
                </div>
                <img
                    className="h-full w-full object-cover rounded-xl"
                    src={`https://image.tmdb.org/t/p/original${posterPath}`}
                    alt="/"
                />
            </div>
        </section>
    );
}

export default HeroPost;