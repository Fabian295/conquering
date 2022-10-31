import React from 'react'
import logo from './logo.svg';
import Nav from './Nav'
import './App.css'

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Conquering Redux</h1>
        <Nav />
      </header>
    </div>
  )
}

export default Header