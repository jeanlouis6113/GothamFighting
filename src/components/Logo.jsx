import React from 'react';
import { Link } from 'react-router-dom';


export class Logo extends React.Component {

    render() {
        return (
            <div className="logo">
                 <Link to="/"><img src='/images/logoGotham.svg' alt="Logo Gotham"/></Link>
            </div>
        )
    }
}

export default Logo;