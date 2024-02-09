import "./searchBar.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"


const SearchBar = () => {

    const [searchMovies, setSearchMovies] = useState([])

    const searchInputRef = useRef()

    // let searchInputRef = "the"
    let apiKey = "1f06982c9b50c78835d9370e1b4a9b83"
    let apiLinkSerachKeyword = `https://api.themoviedb.org/3/search/keyword?query=${searchInputRef}&page=1&api_key=`

    console.log(searchInputRef);



    useEffect(() => {
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



    return (
        <>




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
        </>
    );
}

export default SearchBar;