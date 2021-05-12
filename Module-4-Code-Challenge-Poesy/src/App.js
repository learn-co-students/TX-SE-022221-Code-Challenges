import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    showForm: false
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(data => this.setState({poems: data}))
  }

  handleClick = () => {
    this.setState({showForm: !this.state.showPoem})
  }

  addPoem = (poem) => {
    fetch("http://localhost:6001/poems", {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'accept' : 'application/json'
      },
      body: JSON.stringify(poem)
  })
  .then(res => res.json())
  .then(newPoem => {
    this.setState({poems: [...this.state.poems, newPoem]})
  })
    
    
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm addPoem={this.addPoem} /> : false}
        </div>
        <PoemsContainer allPoems={this.state.poems} />
      </div>
    );
  }
}

export default App;
