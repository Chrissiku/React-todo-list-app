import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };
  //On change Handler
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //On submit hanlder
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo ..."
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
