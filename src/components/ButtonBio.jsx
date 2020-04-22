import React from 'react';
import { Link } from 'react-router-dom';


class ButtonBio extends React.Component {
    render() {
        return (
            <div>
                <Link to="/PageBio"><button>
                    BIO
                </button>
                </Link>
            </div>
        );
    }
}
export default ButtonBio;




