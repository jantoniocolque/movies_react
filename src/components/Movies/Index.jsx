import MovieBox from '../MovieBox/Index';

export default function Index(props){
    const {data} = props;
    return(
        <>
            {data.map(movie => {
                return (<MovieBox key={movie.id} movie= {movie}/>)
            })}
        </>
    );
}