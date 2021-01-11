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
           <input
             type="text"
             name="word"
             onChange={onChange}
           />
           <button type="submit" >Search</button>
         </form>
         {word? `This is the word ${word}` : ""}
    </div>
  )
}

export default Search;