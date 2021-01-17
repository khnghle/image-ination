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
        <div class="flex justify-center">
          <input class="w-full rounded p-2 shadow" type="text" placeholder="Search..."  onChange={onChange}/>
          
          <button class=" w-auto flex justify-end items-center p-2 shadow">
             <i class="material-icons">search</i>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search;