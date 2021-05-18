import React from 'react';

export const Hello = (props) =>{
    return(
        <div className="Hello">
            <h3>Hello World</h3>
            <p>hello nama saya {props.name}</p>
            <p>Hero Name : {props.hero}</p>
        </div>
    )
}

