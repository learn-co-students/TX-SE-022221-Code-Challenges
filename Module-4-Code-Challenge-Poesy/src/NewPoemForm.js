import React from "react";

class NewPoemForm extends React.Component {
  state = {

  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handeSubmit = (e) => {
    e.preventDefault()
    this.props.addPoem(this.state)
  }
  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handeSubmit}>
        <input placeholder="Title" name="title" onChange={this.changeHandler}/>
        <input placeholder="Author" name="author" onChange={this.changeHandler}/>
        <textarea placeholder="Write your masterpiece here..." name="content" rows={10} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
