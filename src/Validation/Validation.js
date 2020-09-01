import React from 'react';


const validation = (props) => {
    const minLen = 10;
    let validationOutput = 'Text to Short';
     

if(props.getLen > minLen){
    validationOutput = 'Text Long Enough';
}




return(
<div>
    <p>{validationOutput}</p>
</div>
);

}

export default validation;