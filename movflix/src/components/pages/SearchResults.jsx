import getData from '../features/getData.js';
import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Movies from '../Movies/Index';
import Loading from '../Loading/Index';

export default function SearchResult(){
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const myMovie = location.search.split("=")[1];

    const apiKey = '5bb451ae8b03b19bb07e7e9b955179d4';
    let searchEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1&query=${myMovie}`;
    
    const setData = ()=>{
        getData(searchEndPoint).then(data =>{
            setMovies(data.results);
            setIsLoading(false);
        });
    }
    useEffect(()=>{
        setData();
    },[]);

    useEffect(() =>{
        setData();
    },[movies]);
    
    return(
        <div className="row" id="searchResults">
            {isLoading && 
                <>
                    <Loading />
                </>
            }
            {!isLoading && <Movies data = {movies}></Movies>}
		</div>
    );
}