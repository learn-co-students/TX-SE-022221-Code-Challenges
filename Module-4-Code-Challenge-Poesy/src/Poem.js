import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>Title</h3>
        <p>Content</p>
        <p>
          <strong>- By Author</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
