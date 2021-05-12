import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";


const poemUrl = "http://localhost:6001/poems"


class App extends React.Component {

state = {
  poems: [],
  favorites: []
}

componentDidMount() {
fetch(poemUrl)
.then(res => res.json())
.then(poemData => this.setState({
  poems: poemData
}))
}


// handleNewPoem = (e) => {
// e.preventDefault()
// let newTitle = e.target[0].name
// let newAuthor = e.target[1].name
// let newContent = e.target[2].name

// let updatedPoem = {
//   "title": newTitle,
//   "author": newAuthor,
//   "content": newContent
// }
// this.createNewPoem(updatedPoem)
// }


handleFavorites = (poem) => {
  this.setState({
   favorites:  [...this.state.favorites, poem ]
  })
}

 createNewPoem = (updatedPoem) => {
  fetch('http://localhost:3000/poems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(updatedPoem)
  })
  .then(res => res.json())
  .then(poem => 
    this.setState({ 
      poems: [...this.state.poems, poem ] })
  )
 }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.createNewPoem}>Show/hide new poem form</button>
          {this.state.NewPoemForm && <NewPoemForm handleNewPoem={this.handleNewPoem}/>}
        </div>
        <PoemsContainer handleFavorites={this.handleFavorites }poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
