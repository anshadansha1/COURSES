import React ,{useState} from 'react'

const Counter = () => {

    const [count , setCount] = useState(0) 
    //a varible 'count' to keep track of counter and  'setCount' to  set count
  
    return (
    <div>
      <h1>This is my Counter : {count}

        <button>Increment</button>
        <button>Decrement</button>
      </h1>
    </div>
  )
}

export default Counter
