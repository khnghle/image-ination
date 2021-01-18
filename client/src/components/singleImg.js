import React from 'react';
import axios from 'axios'

function Image(props) {
  const {name, location, key} = props.info

  async function onDelete (evt) {
    evt.preventDefault()
    const result = window.confirm("Delete image?")
    if(result){
      await axios.delete(`/api/upload/${key}`)
      props.onDelete(key)
    }
  }
  return (
    <div>
      <div className="container mx-auto bg-gray-screen py-10 flex justify-center p-2">
        <div className="bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out">
            <div className="p-2">
              <button className="block h-4 w-4 bg-red-400 rounded-full right-0" onClick={onDelete}></button>
            </div>
            <div className="">
                <img src={location} alt={name} className="rounded-t object-scale-down h-48 w-full shadow"/>
            </div>

            <div className="p-4">
                <h3 className="text-2xl uppercase justify-center">{name}</h3>
            </div>

        </div>
      </div>


    </div>
  );
}

export default Image;
