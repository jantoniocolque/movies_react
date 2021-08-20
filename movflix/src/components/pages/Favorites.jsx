import getData from '../features/getData.js';

import Loading from '../Loading/Index';
import Movies from '../Movies/Index';
import {useState,useEffect} from 'react';

export default function Favorites(){
    const [isLoading, setIsLoading] = useState(true);
    const [movFavorites, setMovFavorites] = useState([]);
    const endPointGET = `http://localhost:5050/movies`;
    const setData = ()=>{
        getData(endPointGET).then(data =>{
            setMovFavorites(data);
            setIsLoading(false);
        });
    }

    useEffect(()=>{
        setData();
    },[])

    useEffect(()=>{
        setData();
    },[movFavorites])

    return(
        <div className="row" id="searchResults">
            {movFavorites.length == 0 ? 
                <h2>No hay peliculas favoritas</h2>:
                <>
                    {isLoading 
                        &&
                    <Loading />}
                </>
            }
            {!isLoading && <Movies data = {movFavorites}></Movies>}
        </div>
    )
}