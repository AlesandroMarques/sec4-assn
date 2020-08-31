import React from 'react';


const validation = (props) => {
    const minLen = 10;
    let validationOutput = (
        <div>
            <p>Text to Short</p>
            </div>
    );

if(props.getLen > minLen){
    validationOutput = (
        <div>
            <p>Text long enough</p>
        </div>
    );


}

return(validationOutput);

}

export default validation;