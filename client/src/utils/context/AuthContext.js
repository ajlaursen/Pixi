import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth needs to be used inside a AuthProvider');
    }
    return context;
}
export {
    useAuth,
    AuthProvider,
    AuthContext
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array,
        PropTypes.func,
    ]),
};