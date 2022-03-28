import React,{useState} from 'react'
import './AddRepo.css';

const AddRepo = ({showBox,setshowBox,getData}) => {
  const [owner,setOwner]=useState('');
  const [name,setName]=useState('');
  const SubmitHandler = (e)=>{
    e.preventDefault()
    const newData = {
      owner:owner,
      name:name
    }
    getData(newData)
    setshowBox(!showBox)
  }
  return (
      <>
      {
        showBox?<div className='my-modal-container'>
        <div className='my-modal-box'>
          <div className="modal-body mt-4">
            <form className='border border-dark p-4' onSubmit={SubmitHandler}>
              <div className=''>
                  <h3 className='text-center my-4'>ADD NEW REPOSITORY</h3>
                  <label className="form-label">Owner / Organization</label><br/>
                  <input type="text" className="form-control"  
                  onChange={(e)=>setOwner(e.target.value)}/><br/>
                  <label className="form-label">Repository Name</label><br/>
                  <input type="text" className="form-control" 
                   onChange={(e)=>setName(e.target.value)}/><br/>
                  <div className='text-center'>
                    <button className='btn btn-primary px-4' type="submit">Add</button>
                    <button className='btn btn-primary px-4 ms-2' type="submit"  
                    onClick={()=>setshowBox(!showBox)}>Close</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>:null
      }
     
      </>
    
  )
}

export default AddRepo