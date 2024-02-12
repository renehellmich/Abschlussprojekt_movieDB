import { useContext } from "react";
import "./searchShowList.css"
import { useNavigate } from "react-router-dom";
import { mainContext } from "../../context/mainProvider";



const SearchShowList = ({ movie }) => {

    const navigate = useNavigate()
    const {setMovieID,setBackPath} = useContext(mainContext)

    const goToDetails = () => {
        setMovieID(movie.id)
        setBackPath('/home')
        navigate(`/detail/${movie.id}`)
    }

    return (<>


        <div className="containerFoto" onClick={goToDetails}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
        </div>
        <div className="containerInfo" onClick={goToDetails}>
            <p className="movieTitle">
                {movie.title.split()}
            </p>
            <div className="movieInfos" onClick={goToDetails}>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M7.12425 0.529761C7.20804 0.369913 7.33375 0.236078 7.48781 0.142713C7.64186 0.0493477 7.81841 0 7.99838 0C8.17834 0 8.35489 0.0493477 8.50894 0.142713C8.663 0.236078 8.78871 0.369913 8.87251 0.529761L10.7136 4.04591C10.7817 4.17612 10.8779 4.28949 10.9951 4.37779C11.1123 4.46609 11.2476 4.52711 11.3912 4.55643L15.2087 5.33262C15.3789 5.36729 15.537 5.44639 15.6671 5.56195C15.7971 5.67751 15.8945 5.82544 15.9494 5.99082C16.0043 6.1562 16.0147 6.33318 15.9797 6.50392C15.9447 6.67466 15.8655 6.83312 15.75 6.96331L13.0357 10.0175C12.943 10.1222 12.8733 10.2454 12.8315 10.379C12.7896 10.5126 12.7764 10.6536 12.7928 10.7927L13.2748 14.8917C13.2957 15.0689 13.2687 15.2485 13.1964 15.4115C13.1242 15.5745 13.0094 15.715 12.8643 15.818C12.7192 15.921 12.549 15.9829 12.3718 15.9969C12.1946 16.011 12.0169 15.9768 11.8574 15.8979L8.43396 14.2048C8.29828 14.1378 8.14909 14.1029 7.99788 14.1029C7.84667 14.1029 7.69748 14.1378 7.5618 14.2048L4.13443 15.8979C3.97496 15.9768 3.79724 16.011 3.62002 15.9969C3.44279 15.9829 3.27264 15.921 3.1275 15.818C2.98236 15.715 2.86762 15.5745 2.79538 15.4115C2.72314 15.2485 2.69608 15.0689 2.71705 14.8917L3.19906 10.7927C3.21543 10.6536 3.20224 10.5126 3.16036 10.379C3.11847 10.2454 3.04885 10.1222 2.95608 10.0175L0.249737 6.96232C0.134508 6.83232 0.0554031 6.67416 0.0203728 6.50375C-0.0146574 6.33334 -0.00437924 6.15668 0.0501745 5.99152C0.104728 5.82636 0.201636 5.67853 0.331158 5.56286C0.46068 5.4472 0.618253 5.3678 0.788043 5.33262L4.60162 4.55643C4.74522 4.52711 4.88052 4.46609 4.99772 4.37779C5.11491 4.28949 5.21106 4.17612 5.27919 4.04591L7.12425 0.529761Z" fill="#FFD500" />
                </svg> <strong>{movie.vote_average.toFixed(1)}</strong></p>
                <p>{movie.release_date.substring(0, 4)}</p>
                {/* <p>{movie.genre_ids}</p> */}
                {/* <p>{movie.resume}</p> */}
            </div>
        </div>


    </>);
}

export default SearchShowList;