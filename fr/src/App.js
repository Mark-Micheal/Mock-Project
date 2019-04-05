import React, { Component } from 'react'
import Header from './components/Header'
import Todo from './components/Todos'
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "task 1",
        completed: false
      },
      {
        id: 2,
        title: "task 2",
        completed: false
      },
      {
        id: 3,
        title: "task 3",
        completed: false
      }
    ]
  }
  
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }
  
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <Todo todos = {this.state.todos}
           markComplete={this.markComplete}
           delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
