import React from 'react';

function Image(props) {
  const {name, location} = props.info
  return (
    <div>
      <div class="container mx-auto bg-gray-screen py-10 flex justify-center p-5">
        <div class="bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out">
            <div class="">
                <img src={location} alt={name} className="rounded-t"/>
            </div>

            <div class="p-4">
                <h3 class="text-2xl uppercase justify-center">{name}</h3>
            </div>
        </div>
      </div>


    </div>
  );
}

export default Image;
