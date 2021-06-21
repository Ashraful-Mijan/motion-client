import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newAdmin = {
            email: data.email
        }

        fetch('http://localhost:4000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAdmin)
        })
            .then(res => {
                if (res) {
                    alert('Admin Created successfully');
                }
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-75 p-3 rounded text-light fw-bold' style={{ backgroundColor: '#1D3548' }}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" placeholder="johndue5@email.com" name="email" className="form-control" {...register("email", { required: true })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;