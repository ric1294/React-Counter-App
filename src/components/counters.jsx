import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {
    state = {
        counters :[
            { id : 1, value : 4},
            { id : 2, value : 0},
            { id : 3, value : 0},
            { id : 4, value : 0},
            { id : 5, value : 0},
            { id : 6, value : 0}
            
        ]
    }

    handleDelete = () =>{
        console.log("Hello Delete here");
    }
    render() { 
        return <div>
           
            {this.state.counters.map(counter=>(
            <Counter key={counter.id} value={counter.value} onDelete={this.handleDelete}>
                <h4>Title</h4>
            </Counter>))}
            </div>;
    }
}
 
export default Counters;