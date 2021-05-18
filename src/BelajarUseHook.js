import React,{useState} from 'react'

const BelajarUseHook = () =>{
    const [bilangan,setBilangan] = useState(0);
    const [bilanganKedua, setBilanganKedua] = useState(0);
    const [hasil,setHasil] = useState(0);
    return(
        <div className="BelajarUseHook">
            <h3>Hello World</h3>
            <p>Bilangan Pertama : {bilangan}</p>
            <p>Bilangan Kedua : {bilanganKedua}</p>
            <input id="inputBilangan" name="inputBilangan" type="text" onChange={(event)=>{setBilangan(event.target.value)}}/>
            <br/>
            <input id="inputBilanganKedua" name="inputBilanganKedua" type="text" onChange={(event)=>{setBilanganKedua(event.target.value)}}/>
        </div>
    )
}
export default BelajarUseHook;