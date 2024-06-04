import './App.css'

function App() {

  return (
    <main>
      <h1>TODO List</h1>

      <div className='input-container'>
        <input type="text"/>
        <button>+</button>
      </div>

      <div className='container'>
        <div className='todo'>
          <p>go to the class</p>
          <div className="actions">

            <input type="checkbox"/>
            <button>Delete</button>
          </div>
        </div>
      </div>

    </main>
  )
}

export default App
