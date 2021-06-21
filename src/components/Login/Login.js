import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config'

import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { JobContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    let history = useHistory()
    var provider = new firebase.auth.GoogleAuthProvider();
    const [context, setcontext] = useContext(JobContext);

    function GoogleSignIn() {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const newUser = {
                    ...context,
                    jobSeekarIsLogin: true,
                    email: result.user.email
                }
                setcontext(newUser)
                history.replace(from);
            }).catch((error) => {

                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <section className='login' id="login">
            <div className="container">
                <div className="mx-auto w-50 text-center text-white">
                    <h2>Find The Job That Fits Your Life</h2>
                    <p>By continuing, you agree to our Terms of Use and Privacy Policy.</p>
                    <button onClick={GoogleSignIn} 
                    className='btn btn-primary w-75' 
                    style={{ backgroundColor: '#FFFFFF', color: 'black' }}>
                        <div className=''>
                            <FcGoogle className='fs-3 me-2' /><span >Continue With Google</span>
                        </div>
                    </button>
                    <h5>
                        Are You Hiring ? <Link className='text-decoration-none' to="/hire">Post Jobs</Link>
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default Login;