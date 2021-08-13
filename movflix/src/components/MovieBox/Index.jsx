import './css/index.css';
import imgDefault from './img/no-poster.jpg' ;
import getData from '../features/getData.js';
import postData from '../features/postData.js';
import removeData from '../features/removeData.js';

import Loading from '../Loading/Index';

import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';


export default function Index(props){
    const [isLoading, setIsLoading] = useState(false);
    const [stateFavorite,setStateFavorite] = useState(false);
    const {movie} = props;
    const imgURL = movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : imgDefault;

    const endPointGET = `http://localhost:5050/movies/${movie.id}`;
    const endPointPOST = "http://localhost:5050/movies";

    const setData = ()=>{
        getData(endPointGET).then(data =>{
            if(movie.id == data.id){
                setStateFavorite(data);
                setIsLoading(false);
            }
        });
    }

    useEffect(()=>{
        setData();
    },[])

    const myHandlerAddFav = ()=>{
        postData(endPointPOST,movie).then(data=>{
            setStateFavorite(true);
            setIsLoading(false);
        })
    }
    const myHandlerRemoveFav = ()=>{
        removeData(endPointGET).then(data=>{
            setStateFavorite(false);
            setIsLoading(false);
        })
    }


    return(
        <>
            <div className="col-12 col-sm-6 col-lg-3 my-2">
                <div className="card h-100">
                    <img src={imgURL} className="card-img-top" />
                    {
                        stateFavorite && <i className="fas fa-heart" onClick={myHandlerRemoveFav} style={{"color":"red", "fontSize" : "2rem", "cursor":"pointer","width":"50px"}}></i>
                    }
                    {
                        !stateFavorite && <i className="fas fa-heart" onClick={myHandlerAddFav} style={{"color":"#9c9c9c", "fontSize" : "2rem", "cursor":"pointer","width":"50px"}}></i>
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