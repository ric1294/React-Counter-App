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

    handleDelete = counterId =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    handleReset = () =>{
        const counters = this.state.counters.map(c=>{
            c.value = 0;
            return c;
        })
        this.setState({counters})
    }

    handleIncrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
    }
    render() { 
        return <div>
           <button className='btn btn-success' onClick={this.handleReset}>Reset</button>
            {this.state.counters.map(counter=>(
            <Counter key={counter.id}
             value={counter.value}
             counter={counter}
             onDelete={this.handleDelete}
             
             onIncrement={this.handleIncrement}>
                <h4>Title</h4>
            </Counter>))}
            </div>;
    }
}
 
export default Counters;