import React, {Component} from React;


class App extends component {
    constructor()
    super()
    this.state ={}
}

var Increment = React.createClass ({
    getInitialState() {
      return {
        counter: 0
      };
    },
  
    increment() {
      this.setState({
        counter: this.state.counter + 1
      });
    },
    
    decrement() {
      this.setState({
        counter: this.state.counter - 1
      });
    },
  
    render() {
      return <div>
        <div id='counter'>{this.state.counter}</div> 
        <button onClick = {this.increment}> Add 1 </button> 
        <button onClick = {this.decrement}> Minus 1 </button> 
       </div>
    }
  });

  shouldComponentUpdate()
  
//   React.render(<Increment />, document.getElementById('mount'))
  
export default App  