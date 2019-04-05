import React from 'react'

function Header () {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  background: '#222',
  color: '#ffa',
  textAlign: 'center',
  padding: '10 px'
}

export default Header
