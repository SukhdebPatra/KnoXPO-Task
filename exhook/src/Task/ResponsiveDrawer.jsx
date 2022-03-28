import React,{useState,useEffect} from 'react';
import AddRepo from './AddRepo';
import RepoDetails from './RepoDetails';

function ResponsiveDrawer(props) {
  const [showBox,setshowBox]=useState(false)
  const [formData,setformData]=useState([])
  const [details,setdetails]=useState([])

  const getData = (data)=>{
    setformData([...formData,data])
  }
  const getDetails = (data)=>{
    setdetails(data)
  }
  useEffect(()=>{

  },[details])
  return(<>

    {/* Nav bar */}
    <div className='container-fluid'>
      <div className='row p-2 bg-dark'>
        <div className='col'>
          <div className='gutter-gap'>
            <h3 className='text-center text-white'>GITHUB BROWSER</h3>
          </div>
        </div>
      </div>
    </div>
      {/* Repo list */}
    <div className='container-fluid'>
      <div className='row'>
        {
          formData.length>0?
          <div className='col-3 bg-light py-3'>
          <div className='gutter-gap'>
            <ul className='list-group'>
              {
                formData.map((elem,index)=>{
                  return <li key={index} className='list-group-item' style={{cursor:'pointer'}}
                  onClick={()=>getDetails(elem)}>{elem.name}</li>
                })
              }
        
            </ul>
          </div>
        </div>:<div className='col-3 bg-light py-3'>
          <div className='gutter-gap'>
            <ul className='list-group'>
              <li className='list-group-item'>Repository Name 0</li>
            </ul>
          </div>
        </div>
        }

        {/* Delete button */}
        <div className='col-9'>
          <div className='gutter-gap text-end mt-4'>
            <button className='btn btn-primary'
            onClick={()=>{
              setformData([])
              setdetails([])
            }}>Delete</button>
          </div>
          <div className='repo-details'>
            {
              Object.keys(details).length>0?<RepoDetails details={details}/>:null
            }
          </div>
        </div>
      </div>
    </div>

    {/*  + button */}
    <div className='showmodal-btn'>
        <i className="bi bi-plus-circle-fill" 
        onClick={()=>setshowBox(!showBox)}></i>
    </div>

    {/* sending props */}
    {
      showBox && <AddRepo showBox={showBox} setshowBox={setshowBox} getData={getData}/>
    }
  </>)
}

export default ResponsiveDrawer;
