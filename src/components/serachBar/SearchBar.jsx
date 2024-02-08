import "./searchBar.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
const SearchBar = () => {


    // let searchInputRef = useRef()

    let [searchInput, setSearchInput] = useState()

    // searchInputRef = useRef()

    const apiKey = "1f06982c9b50c78835d9370e1b4a9b83"
    const apiLinkSerachKeyword = `https://api.themoviedb.org/3/search/keyword?query=${searchInput}&page=1&api_key=`

    console.log(searchInput);



    useEffect(() => {
        const apiFetch = async () => {
            const raspuns = await axios.get(`${apiLinkSerachKeyword}${apiKey}`)
            console.log("s", raspuns.data);

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


            <h1>hier is search bar</h1>
            {/* <div className=''>
                <input
                    style={{ width: "100%" }}
                    type="text"
                    onChange={movieSearch()}
                    placeholder={`search for a movie`}
                />
            </div> */}
        </>
    );
}

export default SearchBar;