import React from 'react'
import { useSelector } from 'react-redux'
import { decrement, increment } from '../redux/CounterSlice'

import { useDispatch } from 'react-redux'

const Counter = () => {
    // Use useSelector to extract the current count value from the Redux store's state
    const count = useSelector((state) => state.counter.value)
    // useSelector is used to select the value property from the counter slice of the Redux state and store it in the count variable.

    const dispatch = useDispatch()
    // useDispatch is used to get the dispatch function, which allows us to send actions to the Redux store.

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <br/>
      <br/>

      <div>{count}</div>

      <br/>
      <br/>


      <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default Counter
