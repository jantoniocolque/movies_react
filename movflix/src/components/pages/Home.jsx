import {useEffect, useState} from 'react';
import getData from '../features/getData.js';

import Movies from '../Movies/Index';
import Loading from '../Loading/Index';

export default function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const apiKey = '5bb451ae8b03b19bb07e7e9b955179d4';
    const searchEndPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1`;

    const setData = ()=>{
        getData(searchEndPoint).then(data =>{
            setMovies(data.results);
            setIsLoading(false);
        });
    }
    useEffect(()=>{
        setData();
    },[]);



    return(
        <div className="row" id="popularMovies">
            {isLoading && 
                <>
                    <Loading />
                </>
            }
            {!isLoading && <Movies data = {movies}></Movies>}
		</div>
    );
}