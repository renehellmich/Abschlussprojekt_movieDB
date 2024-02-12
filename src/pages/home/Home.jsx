<<<<<<< HEAD
import Genre from "../../components/genre/Genre";
=======
import { useContext, useState, useEffect } from "react";
>>>>>>> bwalya
import Nav from "../../components/nav/Nav";
import SearchBar from "../../components/searchBar/SearchBar";
import { mainContext } from "../../context/mainProvider";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import "./home.css"
import { useNavigate } from "react-router-dom";


const Home = () => {
<<<<<<< HEAD
    return (
        <>
            <SearchBar />
            <h1>test</h1>
            <Nav />
=======

    // const [seeMostPopularMovies, setSeeMostPopularMovies] = useContext(mainContext)

    const [apiKey] = useState('api_key=1f06982c9b50c78835d9370e1b4a9b83')

    const [seeMostPopularMovies, setSeeMostPopularMovies] = useState([])

    const [apiLink, setApiLink] = useState({
        now: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    })

    useEffect(() => {
        const apiFetch = async () => {
            try {
                const resp = await axios.get(`${apiLink.popular}&${apiKey}`);
                setSeeMostPopularMovies(resp.data.results);
                console.log(resp);
            } catch (error) {
                console.error('Error', error);
            }
        };

        apiFetch();
    }, [apiLink.popular]);


    const getTop5Movies = (movies) => {
        const sortedMovies = movies.sort((a, b) => b.popularity - a.popularity);
        return sortedMovies.slice(0, 5);
    };

    // const Nav = () => {

    //     const navigate = useNavigate()
        
    //      const goToHome = () => {
    //          navigate('/home')
    //      }

    return ( 
        <>
         <SearchBar />
            <div>
                <div className="movieHeader">
                <h2>Trending movies</h2>
                <button></button>
                </div>
                <Carousel>
                {getTop5Movies(seeMostPopularMovies).map((movie, index) => (
                    <Carousel.Item key={index}>
                        
                        <img className="d-block w-100" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                        <div className="darkShadow"></div>
                        <Carousel.Caption>
                        <div className="movieCategorys">
                        <h3 className="movieTitle">{movie.title}</h3>
                        <p className="movieVoting">⭐️{movie.vote_average.toFixed(1)} / 10</p></div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>
        <Nav />
>>>>>>> bwalya
        </>
    );
}

<<<<<<< HEAD
export default Home;
=======

 
export default Home;
    
>>>>>>> bwalya
