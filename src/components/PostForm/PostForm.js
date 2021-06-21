import React from 'react';
import { useForm } from "react-hook-form";

const PostForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4000/addJobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert('post added')
    };

    return (
        <section>
            <div className="container mb-3">
                <div className="form-wrapper w-75 shadow p-3 mx-auto">
                    <h2 className="text-center fw-bold">Post a Job</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3">
                            <label for="jobTitle" class="form-label">Job Title</label>
                            <input type="text" name="jobTitle" class="form-control rounded-pill" {...register("jobTitle", { required: true })} />
                        </div>
                        <div class="mb-3">
                            <label for="company" class="form-label">Company Name</label>
                            <input type="text" name="company" class="form-control rounded-pill" {...register("company", { required: true })} />
                        </div>
                        <div class="mb-3">
                            <label for="location" class="form-label">Location</label>
                            <input type="text" name="location" class="form-control rounded-pill" {...register("location", { required: true })} />
                        </div>
                        <div class="mb-3">
                            {/* <label for="category" class="form-label">Category</label>
                            <input type="text" name='category' class="form-control rounded-pill" {...register("category", { required: true })} /> */}
                            <label for="category" class="form-label">Category</label>
                            <select class="form-select" name='category' {...register("category", { required: true })}>
                                <option selected value='React Developer'>React Developer</option>
                                <option value="Javascript Developer">Javascript Developer</option>
                                <option value="Web Developer">Web Developer</option>
                                <option value="PHP Developer">PHP Developer</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="closeDate" class="form-label">Closing Date</label>
                            <input type="date" name="closeDate" class="form-control rounded-pill" {...register("closeDate", { required: true })} />
                        </div>
                        <div class="mb-3">
                            <label for="website" class="form-label">Website</label>
                            <input type="text" name="website" class="form-control rounded-pill" {...register("website", { required: true })} />
                        </div>
                        <div class="mb-3">
                            <label for="hrMail" class="form-label">HR-mail</label>
                            <input type="email" name="hrMail" class="form-control rounded-pill" {...register("hrMail", { required: true })} />
                        </div>
                        <div class="mb-3">
                            <label for="details" class="form-label">Details</label>
                            <input type="text" name="details" class="form-control rounded-pill" {...register("details", { required: true })} />
                        </div>
                        <button type="submit" class="btn btn-primary rounded-pill">Submit Your Job</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PostForm;