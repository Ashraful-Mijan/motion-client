import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../App';

const Navbar = () => {
    const [isAdmin, setAdmin] = useState(false)
    const [context, setContext] = useContext(JobContext)
    useEffect(() => {
        fetch('http://localhost:4000/loginBaseEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: context.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmin(data)
            })
    }, [context.email])
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light secondary-bg border border-bottom-1">
            <div class="container text-black">
                <Link class="navbar-brand fw-bold text-uppercase" to="/">Motiondoor</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto text-black">
                        <Link class="nav-link  fs-5" to="/">Home</Link>
                        <Link class="nav-link fs-5" to="/">Features</Link>
                        {isAdmin &&
                            <Link class="nav-link fs-5" to="/dashboard">Dashboard</Link>
                        }
                        <Link class="nav-link fs-5" to="/hire">| Employers/Post Job</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;