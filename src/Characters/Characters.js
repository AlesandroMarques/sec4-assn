import React from 'react';
import './Characters.css';

const characters = (props) => {
    
return(

<div className = "Character">
    <p className = "CharacterI" onClick={props.delChar}>{props.val}</p>
</div>

);


}

export default characters;