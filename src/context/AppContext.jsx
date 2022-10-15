import {listOfUsers} from "../constants/constants";
import {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [selectedMovie, setSelectedMovie] = useState(null);

    const onMovieSelect = (movieData) => {

        const {id: movieId} = movieData;

        const peopleWhoWatched = listOfUsers.filter(user => user.movies.includes(movieId));

        setSelectedMovie({
            ...movieData,
            users: peopleWhoWatched
        })
    }

    useEffect(()=> {
        console.log(selectedMovie);
    }, [selectedMovie])

    const data = {
        selectedMovie : selectedMovie,
        setSelectedMovie: (e) => onMovieSelect(e)
    }

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>

}

export const useAppData = () => {
    return useContext(AppContext);
}

export default AppProvider;