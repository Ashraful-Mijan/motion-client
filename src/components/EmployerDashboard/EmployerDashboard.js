import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PostForm from '../PostForm/PostForm';

const routes = [
    {
        path: "/emDashboard",
        exact: true,
        sidebar: () => '',
        main: () => <PostForm/>
    },
    {
        path: "/postForm",
        exact: true,
        sidebar: () => '',
        main: () => <PostForm/>
    }
];

const EmployerDashboard = () => {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "20%",
                        height: '140vh',
                        background: "#f0f0f0"
                    }}
                >
                    <ul style={{ listStyleType: "none", paddingLeft: '10px' }}>
                        <li>
                            <Link to="/postForm" className='text-decoration-none fs-5 text-dark'>Post Job</Link>
                        </li>
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default EmployerDashboard;