import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (

        <>
            <nav>
                <ul>
                    <li>
                        <Link exact to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/BouttonBio">{pageBio}</Link>
                    </li>
                    <li>
                        <Link to="/BouttonPlay">Combat</Link>
                    </li>
                    <li>
                        <Link to="/PageBio">PageBio</Link>
                    </li>
                    <li>
                        <Link to="/PageCombat">PageCombat</Link>
                    </li>

                </ul>
            </nav>

        </>

    );
}

export default Nav;
