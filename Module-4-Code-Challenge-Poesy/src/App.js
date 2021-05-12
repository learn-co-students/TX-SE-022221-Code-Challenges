import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    toggle: false
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(data => this.setState({
      poems: data
    }))
  }

  addPoem = (newPoem) => {
    fetch('http://localhost:6001/poems',{
      method: 'POST',
      headers: {
        'content-type':'application/json',
        'accept':'application/json'
      },
      body: JSON.stringify(newPoem)
    })
    .then(res => res.json())
    .then(newPoem => this.setState({
      poems: [...this.state.poems, newPoem]
    }))
  }


  click = () =>{
    this.setState({
      toggle: !this.state.toggle
    })
  }




  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.click}>Show/hide new poem form</button>
          {this.state.toggle ? <NewPoemForm prop={this.addPoem}/> : null}
          {/* <NewPoemForm prop={this.addPoem}/> */}
        </div>
        <PoemsContainer prop={this.state.poems}/>
      </div>
    );
  }
}

export default App;
