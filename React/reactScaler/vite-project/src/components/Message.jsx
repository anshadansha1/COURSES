import React from 'react'

function Message() {

    function sayHello(){ //function to perform when button action is performed
        console.log('hello')
    }
  return (
    <button onClick={sayHello}>Click me to Say Hello</button>
    //When button in clicked it performs sayHello function and displays output in console.
)
}

export default Message
