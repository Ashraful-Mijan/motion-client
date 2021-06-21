import React, { useEffect, useState } from 'react';
import ManagePost from '../ManagePost/ManagePost';

const Admin = () => {
    const [manage, setManage] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/getJobs')
            .then(res => res.json())
            .then(data => setManage(data))
    }, [])
    return (
        <section>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">JobTitle</th>
                            <th scope="col">Last Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manage.map(manage => <ManagePost key={manage._id} manage={manage} />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Admin;