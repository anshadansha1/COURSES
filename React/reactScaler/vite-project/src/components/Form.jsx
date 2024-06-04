import React , {useState} from 'react'

function Form() {

    const [name , setName] = useState({firstName : '' ,lastName : ''})


  return (
    <div>
      <h1>{name.firstName} - {name.lastName}</h1>
      <form>
        <label>First Name : </label>
        <input onChange={(e)=>setName({...name , firstName : e.target.value })} type="text" value = {name.firstName}/>
        <label>Last Name : </label>
        <input onChange={(e)=>setName({...name , lastName : e.target.value})} type="text" value = {name.lastName}/>
      </form>
    </div>
  )
}

export default Form
