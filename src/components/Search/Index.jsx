import {useRef} from 'react';
import {useHistory} from 'react-router-dom';
export default function Index(props){
    const history = useHistory();
    const inputSearch = useRef('');
    const mySearch = (e) =>{
        e.preventDefault();
        if(inputSearch.current.value.trim().length <3){
            props.divAlert.current.classList.remove('d-none');
            props.divAlert.current.innerText = "Ingresa mas de 3 letras";
        }else{
            props.divAlert.current.classList.add('d-none');
            history.push(`/movies?search=${inputSearch.current.value}`);
        }
    }
    return (
        <>
            <form className="d-flex" onSubmit= {mySearch}>
                <input ref= {inputSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-info" type="submit">Search</button>
            </form>
        </>
    );
}