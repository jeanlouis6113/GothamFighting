import React from 'react';
import './PageBio.css'

import PersonnageList from './PersonnageList';



export class pageBio extends React.Component {

    render() {
        return (
            <div>
                <PersonnageList/>
            </div>
            
            
            // <div className="general">
            //     <h1>Page en construction</h1>
            // </div>
        )
    }
}

export default pageBio;