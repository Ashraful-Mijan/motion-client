import React, { useContext } from 'react';
import { JobContext } from '../../App';

const ManagePost = ({ manage }) => {
    const [context, setContext] = useContext(JobContext)
    const { company, jobTitle, closeDate, _id } = manage;

    function handleApproval(id, e) {
        fetch('http://localhost:4000/approval', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(manage)
        })
            .then(res => {
                if (res.ok) {
                    fetch(`http://localhost:4000/delete/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result) {
                                e.target.parentNode.parentNode.remove()
                            }

                        })
                }
            })
    }

    return (
        <tr >
            <td>{company}</td>
            <td>{jobTitle}</td>
            <td>{closeDate}</td>
            <td><button onClick={(e) => handleApproval(_id, e)}>Approve</button></td>
        </tr>
    );
};

export default ManagePost;