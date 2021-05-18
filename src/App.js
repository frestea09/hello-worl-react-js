import React,{Component} from 'react'
import {Hello} from './Hello'
import ClassHello from './ClassHello'
class App extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="App">
                <Hello/>
                <ClassHello/>
            </div>
        )
    }
}
export default App;