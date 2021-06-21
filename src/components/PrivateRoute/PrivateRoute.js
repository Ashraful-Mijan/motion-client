import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { JobContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [context, setcontext] = useContext(JobContext)
    const {employer} = context;
    return (
        <Route
            {...rest}
            render={({ location }) =>
            employer.loginEmployer ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;