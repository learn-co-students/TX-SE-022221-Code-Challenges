import React from "react";

class Poem extends React.Component {
  
state = {
  read: false
}

handleClick = (e) => {
  e.preventDefault()
  this.setState({
    read: !this.state.read
  })
}

  render() {
    return (
      <div onClick={(e) => this.handleClick(e)}>
        <h3>{this.props.poem.title}</h3>
       <p>{this.props.poem.content}</p>
        <p>
    <strong>{this.props.poem.author}</strong>
        </p>
        <button >Mark as read</button>
      </div>
    );
  }
}

export default Poem;
