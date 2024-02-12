import "./searchBar.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import SearchShowList from "../searchShowList/SearchShowList"
import Genre from "../genre/Genre"
import { Link } from "react-router-dom"

const SearchBar = () => {



    let [searchInput, setSearchInput] = useState("")
    let [searchedOrFilteredMovies, setSearchedOrFilteredMovies] = useState()
    const [genre, setGenre] = useState([])



    const apiKey = 'api_key=1f06982c9b50c78835d9370e1b4a9b83'
    const movieSearch = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`



    const [movieID, setMovieID] = useState(0)
    const [apiLink, setApiLink] = useState({
        now: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        topRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        upcoming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        details: `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`,
        images: `https://api.themoviedb.org/3/movie/${movieID}/images`,
        videos: `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
        search: `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`
    })



    // hier ist fetch für searchbar
    useEffect(() => {
        const getFetch = async () => {
            const result = await axios.get(`${movieSearch}&${apiKey}`)
            // const result = await axios.get(`${apiLink.search} & ${apiKey}`)
            setSearchedOrFilteredMovies(result?.data?.results)
        }
        getFetch()
    }, [searchInput])



    // hier ist fetch für genre
    useEffect(() => {
        const getFetch = async () => {
            const result = await axios.get(`${apiLink.popular}&${apiKey}`)
            setGenre(result?.data?.results)
            // setSearchedOrFilteredMovies(result?.data.results)
            console.log(result.data.results);
        }
        // nowfetch ? getFetch() : null
        getFetch()
    }, [])




    // onclick function for filter nach action
    const filterNachAction = () => {

        if (searchInput == "") {
            const sortedMovies = [...genre]?.filter((movie) => {
                return movie?.genre_ids?.includes(28)
            })
            console.log("sortedMovies", sortedMovies);
            setSearchedOrFilteredMovies(sortedMovies)
        }
        else {
            const sortedMovies = [...searchedOrFilteredMovies]?.filter((movie) => {
                return movie?.genre_ids?.includes(28)
            })
            console.log("sortedMovies", sortedMovies);
            setSearchedOrFilteredMovies(sortedMovies)
        }
    }


    // onclick function for filter nach comedy
    const filterNachComedy = () => {
        if (searchInput == "") {
            const sortedMovies = [...genre]?.filter((movie) => {
                return movie?.genre_ids?.includes(35)
            })
            console.log("sortedMovies", sortedMovies);
            setSearchedOrFilteredMovies(sortedMovies)
        }
        else {
            const sortedMovies = [...searchedOrFilteredMovies]?.filter((movie) => {
                return movie?.genre_ids?.includes(35)
            })
            console.log("sortedMovies", sortedMovies);
            setSearchedOrFilteredMovies(sortedMovies)
        }

    }

    // onclick function for filter nach horror
    const filterNachHorror = () => {
        if (searchInput == "") {// setNowFetch(true)
            const sortedMovies = [...genre]?.filter((movie) => {
                return movie?.genre_ids?.includes(27)
            })
            console.log("sortedMovies", sortedMovies);
            setSearchedOrFilteredMovies(sortedMovies)
        }
        else {

            const sortedMovies = [...searchedOrFilteredMovies]?.filter((movie) => {
                return movie?.genre_ids?.includes(27)
            })
            console.log("sortedMovies", sortedMovies);
            setSearchedOrFilteredMovies(sortedMovies)
        }
    }


    const showMoreMovies = () => {
        if (searchInput == "") {
            setSearchedOrFilteredMovies(genre)

        }
        else {

            const sortedMovies = [...searchedOrFilteredMovies]?.filter((movie) => {
                return movie?.genre_ids?.includes(27)
            })
            console.log("sortedMovies", sortedMovies);
            setSearchedOrFilteredMovies(sortedMovies)
        }
    }


    return (
        <>
            {/* search input  */}
            <form className="seachBar">
                <input type="text" onChange={(e) => setSearchInput(e.target.value)} placeholder="Search Movie ..." />
            </form>
            <div className="genreButtons">
                <button onClick={filterNachAction}>Action</button>
                <button onClick={filterNachComedy}>Comedy</button>
                <button onClick={filterNachHorror}>Horror</button>
                <button onClick={showMoreMovies}>test</button>

            </div>
            {/* show search results */}
            {
                searchedOrFilteredMovies === "" ? null : searchedOrFilteredMovies ?
                    (
                        searchedOrFilteredMovies?.map((movie, index) => {
                            return (

                                <div className="movieCard" key={index}>
                                    < SearchShowList movie={movie} />
                                </div>

                            )
                        })
                    )
                    :
                    (
                        <h1>loading...</h1 >
                    )
            }

        </>
    );
}

export default SearchBar;