import React from 'react'




function Create() {
  return (
    <div className='max-w-xl m-auto'>
      <h1></h1>

      <form>
        <div className="form-control w-full max-w-xs mb-5 ">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        {/* {Ingredends} */}

        <div className="form-control w-full max-w-xs mb-5 ">
          <label className="label">
            <span className="label-text">Ingredends:</span>
          </label>
          <div className='flex gap-5 mb-3'> 
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className='btn btn-outline btn-success'>Add</button>
          </div>
          <p>Ingredends: <span>Tuz, Go'sht, Suv</span></p>
        </div>
        {/* Cooking Time */}
        <div className="form-control w-full max-w-xs mb-5 ">
          <label className="label">
            <span className="label-text">Cooking Time:</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-5 ">
          <label className="label">
            <span className="label-text">Image Url:</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mb-5 ">
          <label className="label">
            <span className="label-text">Method:</span>
          </label>
          <textarea
            type="text"
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          ></textarea>
        </div>

        <button className='btn btn-secondary'>Create</button>
      </form>
    </div>
  )
}

export default Create