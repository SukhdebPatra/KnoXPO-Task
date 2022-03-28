import React from 'react';
import Avatar from './Image/Avatar.jpg';

const CommitBranches = ({details}) => {
  return (<>

  {/*  data * 2 */}
    <div className='commit-branches container p-0 mt-4'>
        <div className='row m-0 bg-dark'>
            <div className='col'>
                <div className='gutter-gap'>
                    <h4 className='text-white text-center commit-title m-0 py-2'>COMMITS: BRANCH NAME</h4>
                </div>
            </div>
        </div>
        <div className='row m-0'>
            <div className='col-12 p-0'>
                <div className='gutter-gap'>
                    <h6 className='commit-title m-0 py-2 mt-3'>10 Mar 2021</h6>
                    <p>Commit message entered by the user in entirety. All of the commit message should be displayed</p>
                    <div className='d-flex align-items-center justify-content-start flex-row issues-img' style={{columnGap:'15px'}}>
                        <div className='author-issue'>
                            <img src={Avatar} alt='AvatarImage'/>
                        </div>
                        <div>{details.owner}</div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='col-12 p-0'>
                <div className='gutter-gap'>
                    <h6 className='commit-title m-0 py-2 mt-3'>10 Mar 2021</h6>
                    <p>Commit message entered by the user in entirety. All of the commit message should be displayed</p>
                    <div className='d-flex align-items-center justify-content-start flex-row issues-img' style={{columnGap:'15px'}}>
                        <div className='author-issue'>
                            <img src={Avatar} alt='AvatarImage'/>
                        </div>
                        <div>{details.owner}</div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default CommitBranches;