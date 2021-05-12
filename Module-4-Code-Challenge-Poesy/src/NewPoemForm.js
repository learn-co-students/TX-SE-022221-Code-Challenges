import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: '',
    author: '',
    content: ''
  }

  handleTitle = (e) => {
    this.setState({ 
      title: e.target.value })
  }

  handleAuthor = (e) => {
this.setState({
  author: e.target.value
})
  }

  handleContent = (e) => {
    this.setState({ 
      content: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createNewPoem(this.state)
    this.setState({ 
      title: '', 
      author: '',
      content: '' 
    })
  }



  render() {
    return (
      <form className="new-poem-form" onSubmit={(e) => this.handleSubmit(e)}>
        <input onChange={this.handleTitle}name="title" placeholder="Title" />
        <input onChange={this.handleAuthor} name="author" placeholder="Author" />
        <textarea onChange={this.handleContent}name="content" placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
