import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    const [PHP, setPHP] = useState(false)
    const [REACT, setREACT] = useState(false)
    const [WEB, setWEB] = useState(false)
    useEffect(() => {
        fetch('http://localhost:4000/getJobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const PHPDevelper = jobs.filter(web => web.jobTitle === 'PHP Developer')
    const WEBDevelper = jobs.filter(web => web.jobTitle === 'Web Developer')
    const REACTDevelper = jobs.filter(web => web.jobTitle === 'React Developer')

    function php() {
        setPHP(!PHP);
        setWEB(false)
        setREACT(false)
    }
    function web() {
        setWEB(!WEB)
        setPHP(false);
        setREACT(false)
    }
    function react() {
        setREACT(!REACT)
        setPHP(false);
        setWEB(false);
    }

    console.log(jobs)
    return (
        <section className='jobs' id="jobs">
            <div className="container py-5">
                <button onClick={php} className='btn btn-primary secondary-bg text-warning border border-info mx-2 my-2'>PHP Developer</button>
                <button onClick={react} className='btn btn-primary secondary-bg text-warning border border-info mx-2 my-2'>React Developer</button>
                <button onClick={web} className='btn btn-primary secondary-bg text-warning border border-info mx-2 my-2'>Web Developer</button>
                <div className="row">
                    {PHP&&
                        PHPDevelper.map(job=> <Job key={job._id} job={job} />)
                    }
                    {WEB&&
                        WEBDevelper.map(job=> <Job key={job._id} job={job} />)
                    }
                    {REACT&&
                        REACTDevelper.map(job=> <Job key={job._id} job={job} />)
                    }
                    {!PHP && !WEB && !REACT &&
                        jobs.map(job=> <Job key={job._id} job={job} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Jobs;