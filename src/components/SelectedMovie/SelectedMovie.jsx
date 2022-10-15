import React from "react";
import {useAppData} from "../../context/AppContext";
import MovieCard from "../MovieCard/MovieCard";


const SelectedMovie = () => {

    const {selectedMovie} = useAppData();

    return (
        <div className={'container'}>
            {selectedMovie?.id ?
                <>
                    <MovieCard
                        title={selectedMovie?.name}
                        genre={selectedMovie?.genre}
                        year={selectedMovie?.year}
                        grade={selectedMovie?.grade}
                        length={selectedMovie?.length}
                        image={selectedMovie?.image}
                        actors={selectedMovie?.actors}
                    />
                </>
                :
                <div></div>

            }
        </div>
    )
}

export default SelectedMovie;