import './css/index.css';
import imgDefault from './img/no-poster.jpg' ;
import {useHistory} from 'react-router-dom';
export default function Index(props){
	const history = useHistory();
    const {data} = props;
    const imgURL = data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : imgDefault;
    return(
        <>
            <div className="row" id="movieDetail">
			<div className="col-12 col-md-4">
				<img src={imgURL} id="movieImg" className="rounded img-thumbnail" alt="imagen de pelicula"/>
			</div>
			<div className="col-12 col-md-8" id="movieInfo">
				<h2>Título: {data.title}</h2>
				<h5>Géneros: </h5>
				<ul>
                    {data.genres.map((genre)=>{
                        return (<li key={data.id+data.genre}>{genre.name}</li>)
                        })
                    }
				</ul>
				<h5>Reseña: </h5>
				<p>{data.overview || 'Sin reseña.' }</p>
				<h5 id="rating">Rating: {data.vote_overage}</h5>
				<button onclick={()=> history.goBack()} className="btn btn-dark my-3">volver al listado</button>
			</div>
		    </div>
        </>
    )
}