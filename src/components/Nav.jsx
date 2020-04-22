import React from 'react';

import { Link } from 'react-router-dom';


function Nav() {
    return (

        <>
            <nav>
                <ul>
                    <li>
                        <Link  exact to="/Logo">Accueil</Link>
                    </li>
                    
             
                </ul>
            </nav>

        </>

    );
}

export default Nav;
