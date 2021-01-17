import React from 'react';

function Image(props) {
  const {name, location} = props.info
  return (
    <div>
      <div className="container mx-auto bg-gray-screen py-10 flex justify-center p-2">
        <div className="bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out">
            <div className="">
                <img src={location} alt={name} className="rounded-t"/>
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
