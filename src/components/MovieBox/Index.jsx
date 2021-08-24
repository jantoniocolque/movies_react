import './css/index.css';
import imgDefault from './img/no-poster.jpg' ;
import getData from '../features/getData.js';
import postData from '../features/postData.js';
import removeData from '../features/removeData.js';


import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';


export default function Index(props){
    const [stateFavorite,setStateFavorite] = useState(false);
    const [moviesLocalStorage, setMoviesLocalStorage] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const {movie} = props;
    const imgURL = movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : imgDefault;
    /*En caso de existir una Api que almaecene mis favoritos
    const endPointGET = `${process.env.REACT_APP_API_HOST}/movies/${movie.id}`;
    const endPointPOST = `${process.env.REACT_APP_API_HOST}/movies`;
    const setData = ()=>{
            getData(endPointGET).then(data =>{
                if(movie.id === data.id){
                    setStateFavorite(data);
                    setIsLoading(false);
                }
            });
        }
    */
    useEffect(()=>{
        if(moviesLocalStorage.length != 0 ){
            moviesLocalStorage.forEach(m =>{
                if(m.id === movie.id){
                    setStateFavorite(true);
                }
            })
        }
    },[]) 
    const myHandlerAddFav =  ()=>{
        let myArray = JSON.parse(localStorage.getItem('favorites'));
        myArray.push(movie);
        setMoviesLocalStorage(myArray);
        setStateFavorite(true);
        
        /*
        postData(endPointPOST,movie).then(data=>{
            setStateFavorite(true);
            setIsLoading(false);
        })*/
    }
    const myHandlerRemoveFav =  ()=>{
        let myArray = JSON.parse(localStorage.getItem('favorites'));
        myArray.forEach(( fav , i) => {
            if (fav.id === movie.id) {
                myArray.splice(i, 1)
            } 
        });
        setMoviesLocalStorage(myArray);
        setStateFavorite(false);
        
        if(window.location.pathname == "/favorites"){
            window.location.reload();
        }
        /*
        removeData(endPointGET).then(data=>{
            setStateFavorite(false);
            setIsLoading(false);
        })*/
    }
    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(moviesLocalStorage));
    },[moviesLocalStorage])
    return(
        <>
            <div className="col-12 col-sm-6 col-lg-3 my-2">
                <div className="card h-100 card-img">
                    <img src={imgURL} className="card-img-top" alt="imagen de pelicula"/>
                    {
                        stateFavorite && <i className="fas fa-heart" onClick={myHandlerRemoveFav}  style={{"color":"red", "fontSize" : "2rem", "cursor":"pointer","width":"50px"}}></i>
                    }
                    {
                        !stateFavorite && <i className="fas fa-heart" onClick={myHandlerAddFav} style={{"color":"#E4DEDE", "fontSize" : "2rem", "cursor":"pointer","width":"50px"}}></i>
                    }
                    <div className="card-body">
                        <h5 className="card-title one-line-title">{movie.original_title}</h5>
                        <p className="card-text">{movie.overview.substr(0, 80).trim()}...</p>
                        <Link to={`/movies/${movie.id}`} className="btn btn-primary">Ver detalle</Link>
                    </div>
                </div>
            </div>
        </>
    )
}