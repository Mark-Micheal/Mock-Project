import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () =>{
        return {
            background: 'a3b4a4', 
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  render () {
      const {id, title, completed} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
        {title} {completed}
        <button onClick={this.props.status.bind(this, id)} style={btnStyle}> Status </button>
        
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#00a0ff',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem
