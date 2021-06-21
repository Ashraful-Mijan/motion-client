import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { JobContext } from '../../App';

const PrivateUser = ({ children, ...rest }) => {
    const [context, setcontext] = useContext(JobContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                context.jobSeekarIsLogin ? (
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

export default PrivateUser;