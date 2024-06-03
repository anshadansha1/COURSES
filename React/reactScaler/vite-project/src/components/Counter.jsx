import React ,{useState} from 'react'

const Counter = () => {
    const [count , setCount] = useState(0) //a varible 'count' to keep track of counter and  'setCount' to  set count
    
    const [factor ,setFactor] = useState(1)

    //Function for increment
    function incrementCount(){
        setCount(count+factor)
    }
    function decrementCount(){
        setCount(count-factor)
    }

    //Function for setting factor :
    function incrementFactor(){
        setFactor(factor+1)
    }
    function decrementFactor(){
        setFactor(factor-1)
    }
    return (
    <div>
      <h1>This is my Counter : {count}</h1>
        
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      
        <h1>Set my factor : {factor}</h1>
        <button onClick={incrementFactor}>Increment</button>
        <button onClick={decrementFactor}>Decrement</button>
      
    </div>
  )
}

export default Counter
