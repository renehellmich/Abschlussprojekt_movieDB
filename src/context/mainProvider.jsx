import React, { createContext, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

    const [apiKey] = useState('api_key=1f06982c9b50c78835d9370e1b4a9b83')

    const [movieID, setMovieID] = useState(0)

    const [apiLink] = useState({
        now: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        topRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        details: `https://api.themoviedb.org/3/${movieID}/movie_id?language=en-US`,
        images: `https://api.themoviedb.org/3/${movieID}/movie_id/images`,
        videos: `https://api.themoviedb.org/3/${movieID}/movie_id/videos?language=en-US`
    })

    return (
        <>
            <mainContext.Provider
                value={{ apiKey, apiLink, movieID, setMovieID }}
            >
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider