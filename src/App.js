import React,{Component} from 'react';
import {Hello} from './Hello';
import ClassHello from './ClassHello';
import GetState from './GetState';
import Destruction from './Destruction';
import BelajarUseHook from './BelajarUseHook';

class App extends Component{
    constructor(){
        super()
        this.state = {
            'bilanganPertama' : 0,
            'bilanganDua' : 1
        }
        this.bilanganSaya = this.bilanganSaya.bind(this)
        this.sayHelloWorld = this.sayHelloWorld.bind(this)
    }
    bilanganSaya(){
        this.setState(
            {
                'bilanganPertama' : 1
            }
        )
    }
    sayHelloWorld(inputKalimat){
        alert(inputKalimat);
    }
    render(){
        return(
            <div className="App">
                {/* <Hello name="ilman teguh prasetya" hero="batman"/>
                <ClassHello name="tata" hero="catwoman"/>
                <GetState bilangan={this.state.bilanganPertama} bilanganSaya={this.bilanganSaya}/>
                <button onClick={this.bilanganSaya}>Rubah Saya</button> */}
                {/* <Destruction pertama={this.state.bilanganPertama} kedua={this.state.bilanganDua} sayHelloWorld={this.sayHelloWorld}/> */}
                <BelajarUseHook/>
            </div>
        )
    }
}
export default App;