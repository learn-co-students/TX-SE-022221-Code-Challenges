import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    allpoems: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
      .then(res => res.json())
      .then(data => {
        this.setState({
          allpoems: data
        })
      })
  }

  submitPoem = (newpoem) => {
    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newpoem)
    }

    fetch('http://localhost:6001/poems', reqPackage)
      .then(res => res.json())
      .then(data => this.setState({
        allpoems: [...this.state.allpoems, data]
      }))
  }

  

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {true && <NewPoemForm submitPoem={this.submitPoem} />}
        </div>
        <PoemsContainer allpoems={this.state.allpoems} />
      </div>
    );
  }
}

export default App;
