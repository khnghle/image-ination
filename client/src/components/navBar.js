import React, {useState} from 'react';
import AddImage from './addImageForm'
import SearchBar from './searchBar'

function NavBar(props) {
  const [displayAddForm, setdisplayAddForm] = useState(false)
  const {filter, setFilter, onSubmitFilter} = props
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-200 p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="54 54 54 54" xmlns="http://www.w3.org/2000/svg"><image href="https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png" height="200" width="200"/></svg>
        <span className="font-semibold text-xl tracking-tight">Img-ination</span>
      </div>

      <SearchBar filter={filter} setFilter={setFilter} onSubmitFilter={onSubmitFilter}/>

        <div>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-200 hover:bg-white mt-4 lg:mt-0"  onClick={()=> {setdisplayAddForm(!displayAddForm)}}>Add Image</ button>
        </div>
      </nav>

        {displayAddForm? <AddImage /> : ''}

    </div>
  );
}

export default NavBar;
