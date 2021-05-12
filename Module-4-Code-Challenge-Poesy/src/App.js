import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    allPoems: [],
    read: false
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res=>res.json())
    .then(data=>this.setState({
      allPoems: data
    }))
  }

  submitForm=(newForm)=>{
    fetch('http://localhost:6001/poems',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newForm)
    })
    .then(res=>res.json())
    .then(newForm=>this.setState({
      allPoems: [...this.state.allPoems, newForm]
    }))

  }

  render() {

    let handleShow=()=>{
      this.setState({
        read: !this.state.read
      })
    }

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={handleShow}>Show/hide new poem form</button>
          {this.state.read && <NewPoemForm submitter={this.submitForm}/>}
        </div>
        <PoemsContainer allPoems={this.state.allPoems} />
      </div>
    );
  }
}

export default App;
