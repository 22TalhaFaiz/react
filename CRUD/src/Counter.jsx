import React, { useState } from 'react'

export default function Counter() {
    let [count,setCount] = useState(0)

  
  
  
  
    return (

    <div>
      <button
        type="button"
        class="btn btn-primary" onClick={() => setCount((count) => count + 1)} >
        +1
      </button>
      
       <h1>{count}</h1>
      
      <button
        type="button"
        class="btn btn-primary" onClick={() => setCount((count) => count - 1)}
      >
        -1
      </button>


    </div>
  )
}
