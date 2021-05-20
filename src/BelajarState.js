import React,{Component} from 'react'

class BelajarState extends Component{
    constructor(){
        super()
        this.state = {
            'bilangan' : 1
        }
        this.setBilangan = this.setBilangan.bind(this)
    }
    setBilangan(event){
        this.setState(
            {
                'bilangan' : event.target.value
            }
        )
    }
    render(){
        return(
            <div>
                <h3>Hello ini belajar State</h3>
                <p>Bilangan : {this.state.bilangan}</p>
                <label>Bilangan</label>
                <input id="inputBilangan" name="inputBilangan" type="text" onChange={this.setBilangan}/>
            </div>
        )
    }
}

export default BelajarState