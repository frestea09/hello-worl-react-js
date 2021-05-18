import React from 'react';

const GetState = (props) =>{
    return(
        <div className="GetState">
            <h3>hello</h3>
            <p>Bilangan : {props.bilangan}</p>
            <button onClick={props.bilanganSaya}>Rubah</button>
        </div>
    )
}

export default GetState