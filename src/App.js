import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from 'uuid'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(), // Use uuidv4() to generate a unique ID
        title: "Watch anime",
        completed: false
      },

      {
        id: uuidv4(), // Use uuidv4() to generate a unique ID
        title: "Practice coding",
        completed: false
      },
      {
        id: uuidv4(), // Use uuidv4() to generate a unique ID
        title: "Bebe time",
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  });
  };

  delTodo = (id) => {
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]});
  };

  AddTodo = (title) => {
    const newTodo = {
      id: uuidv4(), // Use uuidv4() to generate a unique ID
      title,
      complete:false
    };
    this.setState({todos:[...this.state.todos,newTodo] });
  };

render() {
  return (
      <div className="App">
        <div className="container container-center">
            <Header />
            <div style={{ padding:'20px' }}>
              <AddTodo AddTodo={this.AddTodo} />
            </div>
            <div style={{ padding: '20px' }}>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </div>
        </div>
          </div>
    );
  }
}

export default App;
 