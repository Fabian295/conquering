import React from 'react'
import counterStore from './store/counterStore'
import './App.css'

/******* DISPATCHING THE ACTION TO THE STORE ***********/
const store = counterStore();
console.log(store.getState())


store.dispatch({
  type: 'INCREMENT'
})
console.log(store.getState())
let state = store.getState()

/************* HERO FUNCTIONAL COMPONENT ***********/
const Hero = () => {
  const increment = (ev) => {
    console.log('increment!')
    state.counter + 1

     return (
      store.dispatch({type: 'INCREMENT'}),
      , console.log(state.counter)
      )
  }

  const decrement = (ev) => {
    console.log('decrement!')
  }
  return (
    <div className='hero'>
      <div className="counterDiv">
        <h1 className="title"
        >Counter: 
        </h1>
        <h1 className='num-title'> 
         {  store.getState().counter }
        </h1>
        <div className="right"></div>
      </div>
      <button 
      onClick={ () => increment() }
      >Increment</button>
      <button
       onClick={ decrement }
      >Decrement</button>
    </div>
  )
}

export default Hero