import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({ children }) => {

    const [apiKey] = useState('api_key=1f06982c9b50c78835d9370e1b4a9b83')
    const [backPath, setBackPath] = useState('')
    const [movieID, setMovieID] = useState(0)
    const [detail, setDetail] = useState([])
    const [trailer, setTrailer] = useState([])
    const [genre, setGenre] = useState([])
    const [apiLink, setApiLink] = useState({
        now: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        topRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        details: `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
        images: `https://api.themoviedb.org/3/movie/${movieID}/images`,
        videos: `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`
    })

    // if (movieID != 1212073) {
    //     setMovieID(1212073)
    // }

    useEffect(() => {
        movieID ? (
            setApiLink((prevState) => ({
                ...prevState,
                details: `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
                videos: `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`
            }))
        ) : null;

    }, [movieID])

    useEffect(() => {
        const getFetch = async () => {
            const resp = await axios.get(`${apiLink.details}&${apiKey}`)
            const data = await resp.data
            setDetail(data)
            console.log(resp)

        }
        movieID ? getFetch() : null
    }, [apiLink.details])

    useEffect(() => {
        const getFetch = async () => {
            const resp = await axios.get(`${apiLink.videos}&${apiKey}`)
            const data = await resp.data.results
            setTrailer(data)
            console.log(data)

        }
        apiLink.videos ? getFetch() : null
    }, [apiLink.videos])


    // useEffect(() => {
    //     const getFetch = async () => {
    //         const resp = await axios.get(`${apiLink.topRated}&${apiKey}`)
    //         const data = await resp.data.results
    //         setTrailer(data)
    //         console.log(data)

    //     }
    //     getFetch()
    // }, [])


    return (
        <>
            <mainContext.Provider
                value={{ apiKey, apiLink, movieID, setMovieID, detail, setDetail, trailer, setTrailer,backPath, setBackPath, genre, setGenre }}
            >
                {children}
            </mainContext.Provider>
        </>
    )
}

export default MainProvider