import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title:""
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title)
        this.setState({title:""})
    }

    onChange = (e) => {
        this.setState({title: e.target.value});
    };

  render() {
    return (
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input type="text" value={this.state.title}name="title" placeholder='Add new todo task.' onChange={this.onChange} style={{flex: "10px", padding: "5px"}}/>
            <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ marginLeft: "10px" }} // Set margin-left to 10px (adjust as needed)
      />
        </form>
    )
  }
}

export default AddTodo