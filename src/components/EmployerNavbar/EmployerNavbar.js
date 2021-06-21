import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../App';

const EmployerNavbar = () => {
    const [context, setContext] = useContext(JobContext)
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light secondary-bg border border-bottom-1">
            <div class="container text-black">
                <Link class="navbar-brand text-uppercase fw-bold" to="/">Motiondoor</Link>
                <Link class="text-decoration-none" to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto text-black">
                        <span><strong>{context.employer.companyName}</strong></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default EmployerNavbar;