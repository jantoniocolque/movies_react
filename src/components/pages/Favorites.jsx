import getData from '../features/getData.js';

import Loading from '../Loading/Index';
import Movies from '../Movies/Index';
import {useState,useEffect} from 'react';

export default function Favorites(){
    const [isLoading, setIsLoading] = useState(true);
    const [movFavorites, setMovFavorites] = useState([]);
    /* En caso de existir un API donde se pueda almacenar los favoritos
    const endPointGET = `${process.env.REACT_APP_API_HOST}`;
    const setData = ()=>{
        getData(endPointGET).then(data =>{
            setMovFavorites(data.movies);
            setIsLoading(false);
        });
    }
    */
    function mySetData (){
        setMovFavorites(JSON.parse(localStorage.getItem('favorites')));
        setIsLoading(false);
    }
    useEffect(()=>{
        mySetData();
    //    setData();
    },[])

    /*ciclo infinito...*/
    // useEffect(()=>{
    //     mySetData();
    // },[movFavorites]);
    return(
        <div className="row" id="searchResults">
            {movFavorites.length == 0? 
                <h2>No hay peliculas favoritas</h2>:
                <>
                    {isLoading 
                        &&
                    <Loading />}
                </>
            }
            {!isLoading && <Movies data = {movFavorites} ></Movies>}
        </div>
    )
}