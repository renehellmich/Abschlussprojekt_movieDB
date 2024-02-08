import "./searchBar.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import SearchShowList from "../searchShowList/SearchShowList"
const SearchBar = () => {


    // let searchInputRef = useRef()

    let [searchInput, setSearchInput] = useState()
    let [searchedMovies, setSearchedMovies] = useState()

    // searchInputRef = useRef()

    const apiKey = "1f06982c9b50c78835d9370e1b4a9b83"
    // const apiLinkSerachKeyword = `https://api.themoviedb.org/3/search/keyword?query=${searchInput}&page=1&api_key=`
    const apiSearchMovie = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1&api_key=`

    console.log(searchInput);



    useEffect(() => {
        const apiFetch = async () => {
            const result = await axios.get(`${apiSearchMovie}${apiKey}`)
            setSearchedMovies(result.data.results)
            console.log("s", result.data);
            console.log("searchedMovies", searchedMovies);

        }
        apiFetch()
    }, [searchInput])


    const movieSearch = (event) => {
        const input = event.target.value
        setSearchInput(input)

    }


    return (
        <>
            <input type="text" onChange={(e) => setSearchInput(e.target.value)} />

            {
                searchedMovies ?
                    (
                        searchedMovies?.map((movie, index) => {
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