import React, {useState} from 'react';
import axios from 'axios'

function AddImageForm (props) {
  const [name, setName] = useState('')
  const [img, setImg] = useState(null)
  const {onAddImage} = props

  const onSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append('image', img)
    formData.append('name', name)

    const config = {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    }

    axios.post('/api/upload', formData, config)
      .then((res) => {
        alert('successful upload')
        const {Location} = res.data
        const newImage = {name, location: Location}
        onAddImage(newImage)
      }).catch((err) => {
        console.log(err)
      })
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
          <input type="file" className="p-2" onChange={evt => setImg(evt.target.files[0])}/>
        </div>
            
        <div className="mt-2">
          <button className="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300" type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  )
}

export default AddImageForm;