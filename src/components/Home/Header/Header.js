import React from 'react';

const Header = () => {
    return (
        <section className="header py-4" id="header">
            <div className="container">
                <form class="d-flex justify-content-center  ">
                    <input type="text" name='JobTitle' class="form-control w-50" placeholder="JobTitle" />

                    <button type="submit" class="btn btn-primary mx-2">Find Jobs</button>
                </form>
            </div>
        </section>
    );
};

export default Header;