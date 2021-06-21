import React from 'react';
import { useHistory } from 'react-router-dom';

const Job = ({job}) => {
    let history = useHistory()
    const {company, closeDate, jobTitle, location, _id} = job;
    function handleApply(id) {
        history.push(`/job/${id}`)
    }
    return (
        <div className="col-md-4 mb-2">
            <div onClick={()=>handleApply(`${_id}`)} class="card h-100">
                <div class="card-body">
                    <h5 class="card-title text-info">{jobTitle}</h5>
                    <span className='d-inline-block text-primary px-1'>Close Date: {closeDate}</span>
                    <span className='d-inline-block text-primary px-1'>Location:{location}</span>
                    <span className='d-inline-block text-primary px-1'>Company: {company}</span>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Job;