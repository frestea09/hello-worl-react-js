import React from 'react'

const Destruction = (props)=>{
    const {pertama,kedua,sayHelloWorld} = props
    return(
        <div className="Destruction">
            <h3>Hello</h3>
            <p>{pertama}</p>
            <p>{kedua}</p>
            <button onClick={()=>{sayHelloWorld('ilman')}}>Hello</button>
        </div>
    )
}
export default Destruction