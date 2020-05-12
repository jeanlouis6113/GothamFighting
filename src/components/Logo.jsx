import React from 'react';
import { Link } from 'react-router-dom';


export class Logo extends React.Component {

    render() {
        return (
            <div>
                 <Link to="/"><img src='/images/logoGotham.svg' alt="Logo Gotham" className="logo-direct"/></Link>
            </div>
        )
    }
}

export default Logo;