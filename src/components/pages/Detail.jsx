import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import getData from '../features/getData.js';

import MovieDetail from '../MovieDetail/Index';
import Loading from '../Loading/Index';

export default function Detail(){
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    const {id} = useParams();
    const apiKey = '5bb451ae8b03b19bb07e7e9b955179d4';
    const detailEndPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`;

    const setData = ()=>{
        getData(detailEndPoint).then(data =>{
            setMovie(data);
            setIsLoading(false);
        });
    }
    useEffect(()=>{
        setData();
    },[]);

    return(
        <div className="row" id="movieDetail">
            {isLoading && 
                <>
                    <Loading />
                </>
            }
            {!isLoading && <MovieDetail data = {movie}></MovieDetail>}
		</div>
    );
}