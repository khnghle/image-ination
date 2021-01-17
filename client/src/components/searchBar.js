import React, {useState} from 'react';

function Search () {
  const [word, setWord] = useState('')

  const onChange = (evt) => {
    setWord(evt.target.value)
  }

  const onSubmit = () => {
    console.log('something with db')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex justify-center">
          <input className="w-full rounded p-2 shadow" type="text" placeholder="Search..."  onChange={onChange}/>
          
          <button className=" w-auto flex justify-end items-center p-2 shadow">
             <i className="material-icons">search</i>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search;