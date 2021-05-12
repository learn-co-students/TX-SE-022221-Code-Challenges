import React from "react";

class NewPoemForm extends React.Component {

  submitHandler=(e)=>{
    e.preventDefault()
    console.log('clicked')
    this.props.submitPoem(this.state)
  }

  changeHandler=(e)=>{
    let {name, value} = e.target
    this.setState({
      [name]: value
    })

  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="new-poem-form">
        <input placeholder="Title" name='title' type='text' onChange={this.changeHandler} />
        <input placeholder="Author" name='author' type='text' onChange={this.changeHandler}/>
        <textarea placeholder="Write your masterpiece here..." name='content' type='text' rows={10} onChange={this.changeHandler}/ >
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
