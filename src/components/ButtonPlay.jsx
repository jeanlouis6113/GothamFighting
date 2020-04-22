import React from 'react';
import { Link } from 'react-router-dom';

class ButtonPlay extends React.Component {
    render() {
        return (
            <div>
                <Link to="/PageCombat"><button>
                    PLAY
                </button>
                </Link>
            </div>
        );
    }
}
export default ButtonPlay;
