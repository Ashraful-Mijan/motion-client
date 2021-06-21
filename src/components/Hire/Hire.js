import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import { JobContext } from '../../App';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Modal.setAppElement('#yourAppElement');

const Hire = () => {
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/pack" } };
    let history = useHistory()
    const [context, setContext] = useContext(JobContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    function shiftPackgs() {
        history.push('./pack')
    }

    const onSubmit = data => {
        console.log(data)
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const newEmployer = { ...context, employer: { loginEmployer: true, companyName: data.companyName } }
                setContext(newEmployer)
                shiftPackgs()
                history.replace(from);
                var user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
        
    };
    console.log(context)
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className='hire pt-5' id='hire'>
            <div className="container">
                <div className="hire-body py-5 w-75 mx-auto">
                    <div className="hire-text text-center">
                        <h1 className='fw-bold' style={{ fontSize: '3.5rem' }}>Let's make your next<br /> great hire. Fast.</h1>
                        <div className="subtitle">
                            <p className='fs-5'>
                                You know who you're looking for. <br />
                                We'll help you find them.
                            </p>
                        </div>
                        <div className="hire-button my-4">
                            <button onClick={openModal} className='btn btn-primary fs-4 w-25 py-1'>
                                Post Job
                            </button>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="ExampleModal"
                >
                    <h2>Let's create your account</h2>
                    <h6>Already have an account? <Link to='/login'>Sign in</Link></h6>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3">
                            <label for="companyName" class="form-label">Company Name</label>
                            <input type="text" name="companyName" class="form-control" {...register("companyName", { required: true })} />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" name="email" class="form-control" {...register("email", { required: true })} />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" name="password" class="form-control" {...register("password", { required: true })} />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </Modal>
            </div>
        </section>
    );
};

export default Hire;