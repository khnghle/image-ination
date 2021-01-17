import React, {useState} from 'react';

function AddImageForm () {
  const [name, setName] = useState('')
  const [img, setImg] = useState('')


  const onSubmit = (evt) => {
    console.log({evt, name, img})
    console.log('something with db')
  }

  return (
    <div className="md:p-12 bg-indigo-100 flex flex-row flex-wrap">
      <form className="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg" onSubmit={onSubmit}>
      
        <div className="text-2xl text-indigo-900">New Image</div>
      
        <div className="flex-col flex py-3">
          <label className="pb-2 text-gray-700 font-semibold">Name</label>
          <input type="text" className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" onChange={evt => setName(evt.target.value)}/>
        </div>
      
        <div className="flex-col flex py-3">
          <label className="pb-2 text-gray-700 font-semibold">Image</label>
          <input type="file" className="p-2" onChange={evt => setImg(evt.target.value)}/>
        </div>
            
        <div className="mt-2">
          <button className="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300" type="submit">Submit Form</button>
        </div>
      </form>

      Curr Name: {name}
      Curr Img: {img}
    </div>
  )
}

export default AddImageForm;