import React from 'react'

function AddTask() {
  return (
  <>
  <button>X</button>
  <h3>Add TODO</h3>

  <div>
  <label htmlFor="">Title</label>
  <input type="text"/>
  </div>
  <div>
  <label htmlFor="">Status</label>
  <div>
  <select name="" id="">
    <option value="Incomplete">Incomplete</option>
    <option value="Completed">Completed</option>
  </select>
  </div>
  </div>

  <button>Add Task</button>
  <button>Cancel</button>

  </>
  )
}

export default AddTask
