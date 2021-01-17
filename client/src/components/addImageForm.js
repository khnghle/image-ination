import React, {useState} from 'react';

function AddImageForm () {
  const [name, setName] = useState('')

  const onSubmit = (evt) => {
    console.log({evt, name})
    console.log('something with db')
  }

  return (
      <form onSubmit={onSubmit}>
          <label> Image Name</label>
          <input onChange={evt => setName(evt.target.value)} />

          <label>Upload Image</label>
          <input type="file" id="image" name="image" accept="image/png, image/jpeg" />

          <button onClick={onSubmit}>Submit</button>
      </form>
  )
}

export default AddImageForm;