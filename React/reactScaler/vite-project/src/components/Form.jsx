import React , {useState} from 'react'

function Form() {

    const [name , setText] = useState('')


  return (
    <div>
      <form>
        <input onChange={(e)=>setName(e.target.value)} type="text" value = {text}/>
        <h1>{text}</h1>
      </form>
    </div>
  )
}

export default Form
