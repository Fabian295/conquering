import React from 'react'
import counterStore from './store/counterStore'
import { increment } from './actions/counterActions'
import './App.css'


/******* DISPATCHING THE ACTION TO THE STORE ***********/
const store = counterStore();
console.log(store.getState())

store.dispatch(increment())
store.dispatch({ type: 'DECREMENT' })


// let state = store.getState()

// store.subscribe(() => {
//   store.getState()
//   console.log(state)
// })

// store.dispatch({
//   type: 'INCREMENT'
// })
// // console.log(store.getState())
// let state = store.getState()
// let counter = state
// console.log(store.getState())
/************* HERO FUNCTIONAL COMPONENT ***********/
const Hero = () => {
//   store.dispatch({
//     type: 'INCREMENT'
//   })
  // console.log(store.getState())

  let state = store.getState()

store.subscribe(() => {
  store.getState()
  console.log(state)
})
  
  console.log(store.getState())
  const add = () => {
    console.log('increment')
    store.dispatch(increment())
    // store.dispatch()
    return (state.counter,
    
    console.log(store.getState().counter))
  }

  const decrement = (ev) => {

    console.log('decrement!')
    store.dispatch({
      type: 'DECREMENT'
    })
  }
  return (
    <div className='hero'>
      <div className="counterDiv">
        <h1 className="title"
        >Counter: 
        </h1>
        <h1 className='num-title'> 
         { state.counter }
        </h1>
        <div className="right"></div>
      </div>
      <button 
      onClick={ () =>  {
        add()
      } }
      >Increment</button>
      <button
       onClick={ () =>  {
        decrement()
      }  }
      >Decrement</button>
    </div>
  )
}

export default Hero