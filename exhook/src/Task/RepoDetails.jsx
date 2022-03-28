import React,{useState} from 'react';
import Avatar from './Image/Avatar.jpg';
import CommitBranches from './CommitBranches';

const RepoDetails = ({details}) => {
    const [showBranch,setshowBranch]=useState(true)
    const [showIssues,setshowIssues]=useState(false)
    const [showCommits,setshowCommits]=useState(false)
  return (<>
    <div className='repo-details'>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <button className="nav-link" 
                onClick={()=>setshowBranch(!showBranch)}>Branches</button>
            </li>
            <li className="nav-item">
                <button className="nav-link" 
                onClick={()=>setshowIssues(!showIssues)}>Issues</button>
            </li>
        </ul>
    </div>
    {
        showBranch?
        <div className='branches-details mt-2'>
            <ul className='list-group'>
                <li className='list-group-item'
                onClick={()=>setshowCommits(!showCommits)} style={{cursor:'pointer'}}>{details.name}</li>
            </ul>
        </div>:null
    }
    {
        showIssues?
        <div className='branches-issues mt-2'>
            <ul className='list-group'>
                <li className='list-group-item d-flex align-items-center justify-content-start flex-row' style={{columnGap:'15px'}}>
                    <div className='author-issue'>
                        <img src={Avatar} alt='AvatarImage'/>
                    </div>
                    <div>Author for the issue</div>
                </li>
            </ul>
        </div>:null
    }
    {
       showBranch && showCommits?<CommitBranches details={details}/>:null
    }
    
  </>)
}

export default RepoDetails;