import React from 'react';
import './stylle.css';

function DevItem({ dev }) {
  return(
    <li className="dev_item">
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user_info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acesse perfil no Github</a>
    </li>
  )
}

export default DevItem;