import React from 'react';

function Search (props) {
  const {filter, setFilter, onSubmitFilter} = props

  return (
    <div>
      <form onSubmit={onSubmitFilter}>
        <div className="flex justify-center">
          <input className="w-full rounded p-2 shadow" type="text" placeholder="Search..." value={filter} onChange={setFilter}/>
          
          <button className=" w-auto flex justify-end items-center p-2 shadow">
             <i className="material-icons">search</i>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search;