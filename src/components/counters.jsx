import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {
 
    render() { 
          const { onReset , onIncrement, onDelete } = this.props;
        return <div>
           <button className='btn btn-success' onClick={onReset}>Reset</button>
            {this.props.counters.map(counter=>(
            <Counter key={counter.id}
             value={counter.value}
             counter={counter}
             onDelete={onDelete}
             onIncrement={  onIncrement}>
                <h4>Title</h4>
            </Counter>))}
            </div>;
    }
}
 
export default Counters;