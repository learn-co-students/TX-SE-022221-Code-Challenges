import React from "react";

class NewPoemForm extends React.Component {
  newForm = (e) =>{
    e.preventDefault()
    const newPoem = {
      title: e.target[0].value,
      author: e.target[1].value,
      content: e.target[2].value
    }
    this.props.prop(newPoem)

  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.newForm}>
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
