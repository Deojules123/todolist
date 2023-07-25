import React, { Component } from "react";
import Todoitems from "./Todoitems";
import PropTypes from "prop-types";


class Todos extends Component {
    render() {
      const { todos } = this.props;
      return (
        <div>
          {todos.map((todo) => (
            <Todoitems key={todo.id} todo={todo}
            markComplete ={this.props.markComplete}  delTodo = {this.props.delTodo}/>
          ))}
        </div>
      );
    }
  }

  //PropTypes
  Todos.propTypes = {
    todos: PropTypes.array.isRequired
  };

export default Todos;
