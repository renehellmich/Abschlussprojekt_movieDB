import "./searchShowList.css"
const SearchShowList = ({ movie }) => {
    return (<>


        <div className="containerFoto">
            <img src="" alt={movie.title}></img>
        </div>
        <div className="containerInfo">
            <div className="movieTitle">
                <h4>{movie.title}</h4>
            </div>
            <div className="movieInfos">
                <p>{movie.vote_average.toFixed(1)}</p>
                <p>{movie.release_date.substring(0, 4)}</p>
            </div>
        </div>


    </>);
}

export default SearchShowList;