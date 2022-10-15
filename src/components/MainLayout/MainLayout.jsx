import React from "react";
import MoviesSection from "../MoviesSection/MoviesSection";
import SearchMovies from "../SearchMovies/SearchMovies";
import SearchUsers from "../SearchUsers/SearchUsers";

const MainLayout = () => {
    return (
        <div>
            <MoviesSection />
            <SearchMovies />
            <SearchUsers/>
        </div>
    )
}

export default MainLayout;