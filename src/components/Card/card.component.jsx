import React from 'react';
import '../Card/card.component.style.css'
export const Card = (props) => (
    <div className = "card-component">
      <img src = {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt = "robot" /> 
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
)