import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }


  render() {

    let handleOnRead = () => {
      this.setState({
        read: !this.state.read
      })
    }
    return (
      <div>
        <h3>{this.props.singlePoem.title}</h3>
        <p>{this.props.singlePoem.content}</p>
        <p>
          <strong>- {this.props.singlePoem.author}</strong>
        </p>
        <button onClick={handleOnRead}>{!this.state.read ? "Mark as read" : "Read" }</button>
      </div>
    );
  }
}

export default Poem;
