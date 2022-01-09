import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import { render } from '@testing-library/react';
import Counters from './components/counters';
import { Component } from 'react/cjs/react.production.min';
import React from 'react';

class App extends Component {

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

  render(){
    return (
      <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters
        counters={this.state.counters}
        onReset = {this.handleReset}
        onIncrement = {this.handleIncrement}
        onDelete = {this.handleDelete}
        />
      </main>
       </React.Fragment>
    );
  }
};

export default App;
