import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact, deletContact, getContacts } from '../actions/contactAction';
import { decrement, increment, incrementByAmount } from '../counterSlice';
const Counter = () => {   
   const count = useSelector((state) => state.counter.count)

   const dispatch = useDispatch()

   return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(incrementByAmount(6))}
          >
            incrementByAmount
          </button>
        </div>
      </div>
    )
}



export default Counter;