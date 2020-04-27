import React from 'react';
import { Link } from 'react-router-dom';
import characters from './characters.json';
import CardTest from './CardTest';

function PersonnageList() {
  return (
    <div className="CharacterList">
      {characters.map(character => (
        <p key={characters.id} className="Character">
            <Link to={`/PageBio/characters/${character.id}`}>
                <CardTest />
            </Link>
        </p>
      ))}
    </div>
  );
}

export default PersonnageList;
