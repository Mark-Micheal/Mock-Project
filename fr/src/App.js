import React, { Component } from 'react'
import Header from './components/Header'
import Todo from './components/Todos'
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "company 1",
        completed: false,
      },
      {
        id: 2,
        title: "company 2",
        completed: true,
      },
      {
        id: 3,
        title: "company 3",
        completed: false,
      },
      {
        id: 4,
        title: "company 4",
        completed: false,
      },
      {
        id: 5,
        title: "company 5",
        completed: true,
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
  
  status = (id) => {
    
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <Todo todos = {this.state.todos}
           markComplete={this.markComplete}
           status={this.status} />
      </div>
    );
  }
}

export default App;
