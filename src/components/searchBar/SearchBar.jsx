import "./searchBar.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import SearchShowList from "../searchShowList/SearchShowList"

const SearchBar = () => {



    let [searchInput, setSearchInput] = useState("")
    let [searchedMovies, setSearchedMovies] = useState()



    const apiKey = 'api_key=1f06982c9b50c78835d9370e1b4a9b83'
    const movieSearch = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`




    useEffect(() => {
        const apiFetch = async () => {
            const result = await axios.get(`${movieSearch}&${apiKey}`)
            setSearchedMovies(result.data.results)
            // console.log("s", result.data);
            console.log("searchedMovies", searchedMovies);
        }
        apiFetch()
    }, [searchInput])


    return (
        <>
            {/* search input  */}
            <form className="seachBar">
                <input type="text" onChange={(e) => setSearchInput(e.target.value)} placeholder="Search Movie ..." />
            </form>

            {/* show search results */}
            {
                searchedMovies === "" ? null : searchedMovies ?
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