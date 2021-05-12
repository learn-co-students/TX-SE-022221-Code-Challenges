import React from "react";

class Poem extends React.Component {

  markAsRead = (e) => {
    console.log(e.target.innerText)

    if (e.target.innerText = 'Mark as read') {
      e.target.innerText = 'Mark as unread'
    }
    
  }

  favoriteHandler = () => {
    console.log('This should favorite this poem')
  }

  deleteHandler = () => {
    this.props.deletePoem(this.props.poem)
  }

  render() {
    return (
      <div>
        {/* {console.log(this.props.poem)} */}
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By Author {this.props.poem.author}</strong>
        </p>
        <button onClick={this.markAsRead}>Mark as read</button>
        <button onClick={this.favoriteHandler}>Favorite poem</button>
        <button onClick={this.deleteHandler}>Delete poem</button>
      </div>
    );
  }
}

export default Poem;
