import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserNameContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    // Context 
    const { userName } = useContext(UserNameContext);
    return (
        <Route
            {...rest}
            render={({ location }) => userName.userName ?
                children
                : (
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