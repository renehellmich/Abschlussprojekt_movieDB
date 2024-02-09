import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

    const [apiKey] = useState('api_key=1f06982c9b50c78835d9370e1b4a9b83')

    const [movieID, setMovieID] = useState(0)
    const [detail, setDetail] = useState([])
    const [apiLink] = useState({
        now: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        topRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        details: `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
        images: `https://api.themoviedb.org/3/movie/${movieID}/images`,
        videos: `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`
    })

    if (movieID != 866398){
        setMovieID(866398)
        console.log("check")
        console.log(movieID)
    }
    
    useEffect(() =>{
        const getFetch = async() => {
            const resp = await axios.get(`${apiLink.details}&${apiKey}`)
            setDetail(resp.data)
            console.log(resp)
            
        }
            if (movieID)
        },[movieID])
        console.log(`${apiLink.details}&${apiKey}`)
    return (
        <>
            <mainContext.Provider
                value={{ apiKey, apiLink, movieID, setMovieID ,detail, setDetail}}
            >
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider