import React,{Component} from 'react';

class ClassHello extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>Hell ini dari kelas</h3>
                <p>Hello my Name : {this.props.name}</p>
                <p>My Hero Name : {this.props.hero}</p>
            </div>
        )
    }
}

export default ClassHello