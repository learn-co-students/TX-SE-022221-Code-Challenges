import React from "react";

class Poem extends React.Component {
  state = {
    button: false
  }
 handleClick=()=>{
    this.setState({
      button: !this.state.button 
    })
 }

  render() {
    return (
      <div>
        <h3>Title: {this.props.poem.title}</h3>
        <p>Content: {this.props.poem.content}</p>
        <p>
          <strong>- By Author: {this.props.poem.author}</strong>
        </p>
        <button onClick={this.handleClick}>{this.state.button === false ? 'Mark as read' : 'Mark as unread'}</button>
      </div>
    );
  }
}

export default Poem;
