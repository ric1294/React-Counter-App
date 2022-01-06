import React, { Component } from 'react';
 class Counter extends React.Component {
    state = {
        value : this.props.value,
        tag : ['tag1' , 'tag2', 'tag3']
    };

    style = {
        backgroundColor: 'Blue',
    }

    customStyle = {
        backgroundColor : 'Yellow'
    }

    handleIncrement = () =>{
        this.setState({value : this.state.value + 1});
        console.log("Button is clicked!!")
    }
    render() {
        let customStyle =  this.state.count === 0 ? this.customStyle : this.style;
       // console.log("props" ,this.props.children);
        return (
        <div>
            {this.props.children}
            <span style={customStyle} className="badge m-2">{this.formatCount()}</span>
            <button  onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Decrement</button>
            {/* <ul>
                {this.state.tag.map(tag=><li key={tag}>{ tag }</li>)}
            </ul> */}
        </div>
        );
    }

    formatCount(){
       // const { count } = this.state.count
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;