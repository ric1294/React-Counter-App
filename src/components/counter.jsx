import React, { Component } from 'react';
 class Counter extends React.Component {
  

    style = {
        backgroundColor: 'Blue',
    }

    customStyle = {
        backgroundColor : 'Yellow'
    }

    
    render() {
        let customStyle =  this.props.counter.value === 0 ? this.customStyle : this.style;
        return (
        <div>
           
            <span style={customStyle} className="badge m-2">{this.formatCount()}</span>
            <button  onClick={() =>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Decrement</button>
        </div>
        );
    }

    formatCount(){
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }
}
 
export default Counter;