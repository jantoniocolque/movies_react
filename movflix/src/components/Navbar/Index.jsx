//components
import Search from '../Search/Index';

import {useRef} from 'react';
import {Link} from 'react-router-dom';

export default function Index(){
    const divAlert = useRef();
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand " to='/'>MovFlix</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to='/favorites'>Favorites</Link>
                            </li>
                        </ul>
                        <Search divAlert ={divAlert} />
                    </div>
                </div>
            </nav>
            <div ref={divAlert} className="alert alert-danger text-center d-none" id="alert">
                Mensaje de Alerta
            </div>
        </>
    );
}