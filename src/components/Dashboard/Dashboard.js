import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Admin from '../Admin/Admin';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const routes = [
    {
        path: "/dashboard",
        exact: true,
        sidebar: () => <div>'approval'</div>,
        main: () => <Admin />
    },
    {
        path: "/admin",
        exact: true,
        sidebar: () => <div>'approval'</div>,
        main: () => <Admin />
    },
    {
        path: "/makeAdmin",
        sidebar: () => <div>Make Admin</div>,
        main: () => <MakeAdmin/>
    }
];

const Dashboard = () => {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "20%",
                        height: '100vh',
                        background: "#f0f0f0"
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/admin">Post Approval</Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin">Make Admin</Link>
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

export default Dashboard;