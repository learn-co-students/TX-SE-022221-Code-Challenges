import React from "react";

class Poem extends React.Component {
  state = {
    toggle: false
  }
  // toggleMark = (e) => {
  //   console.log(e.target.parentElement.childNodes[3].innerText)
 
  //   if (e.target.parentElement.childNodes[3].innerText="Mark as read") {
  //     e.target.parentElement.childNodes[3].innerText="Mark as unread"
  //   } else {
  //     e.target.parentElement.childNodes[3].innerText="Mark as read" //
  //   }

  toggleMark = () => {
    this.setState({toggle : true})
    console.log('click')
  }

  // }
  render() {
    return (
      <div>
        <h3>{this.props.singlePoem.title}</h3>
        <p>{this.props.singlePoem.content}</p>
        <p>
          <strong>- By {`${this.props.singlePoem.author}`}</strong>
        </p>
        <button onClick={() => this.toggleMark()}>{this.state.toggle ? "Mark as unread" : "Mark as read"}</button>
      </div>
    );
  }
}

export default Poem;
