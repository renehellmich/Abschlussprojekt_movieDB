import "./searchBar.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
<<<<<<< HEAD


const SearchBar = () => {

    const [searchMovies, setSearchMovies] = useState([])

    const searchInputRef = useRef()

    // let searchInputRef = "the"
    let apiKey = "1f06982c9b50c78835d9370e1b4a9b83"
    let apiLinkSerachKeyword = `https://api.themoviedb.org/3/search/keyword?query=${searchInputRef}&page=1&api_key=`

    console.log(searchInputRef);
=======
import SearchShowList from "../searchShowList/SearchShowList"
const SearchBar = () => {



    let [searchInput, setSearchInput] = useState("")
    let [searchedMovies, setSearchedMovies] = useState()



    const apiKey = 'api_key=1f06982c9b50c78835d9370e1b4a9b83'
    const movieSearch = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`

>>>>>>> stefan



    useEffect(() => {
<<<<<<< HEAD
        const apiFetch = async() => {
            const resp = await axios.get(``)
            setSearchMovies(resp.data.results)
        }
        apiFetch()
    }, )

    // useEffect(() => {
    //     const apiFetch = async () => {
    //         const raspuns = await axios.get(`${apiLinkSerachKeyword}${apiKey}`)
    //         console.log("s", raspuns.data);

    //     }
    //     apiFetch()
    // }, [])

    const movieSearch = () => {
        console.log("searchInputRef", searchInputRef.current.value);

    }

=======
        const apiFetch = async () => {
            const result = await axios.get(`${movieSearch}&${apiKey}`)
            setSearchedMovies(result.data.results)
            // console.log("s", result.data);
            console.log("searchedMovies", searchedMovies);
        }
        apiFetch()
    }, [searchInput])
>>>>>>> stefan


    return (
        <>
<<<<<<< HEAD




            <h1>hier is search bar</h1>

            <div className=''>
                <input
                    style={{ width: "100%" }}
                    type="text"
                    ref={searchInputRef}
                    onChange={movieSearch}
                    placeholder={`search for a movie`}
                />
            </div>
=======
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

>>>>>>> stefan
        </>
    );
}

export default SearchBar;