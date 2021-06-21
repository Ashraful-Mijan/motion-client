import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const [data, setData] = useState({});
    console.log(data)
    let {id} = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:4000/getDetails/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id])
    return (
        <section>
            <div className="container">
                <h3>hello serker</h3>
            </div>
        </section>
    );
};

export default JobDetails;