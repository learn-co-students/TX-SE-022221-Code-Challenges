import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    isActive: false,
    favorite: false
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(data => this.setState({poems: data}))
  }

  clickHandler = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  createPoem = (newPoemArgs) => {
    console.log('This should be creating' + newPoemArgs)

    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(newPoemArgs)
    }

    fetch('http://localhost:6001/poems', reqPackage)
    .then(resp => resp.json())
    .then(data => this.setState({
      poems: [...this.state.poems, data]  
    })
    )
  }

  favoritePoem = (poemArgs) => {
    console.log('This should favorite' + poemArgs)
    this.setState({
      favorite: !this.state.favorite
    })
    console.log(this.state.favourites)
  }

  deletePoem = (poemArgs) => {
    console.log('This should have delete poem:' + poemArgs)

    fetch(`http://localhost:6001/poems/${poemArgs.id}`, {method: 'DELETE'})

    this.setState({
      poems: this.state.poems.filter((poem) => {return poem !== poemArgs})
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.isActive !== false &&  <NewPoemForm createPoem={this.createPoem}/>}
        </div>
        <PoemsContainer poems={this.state.poems} deletePoem={this.deletePoem}/>
      </div>
    );
  }
}

export default App;
