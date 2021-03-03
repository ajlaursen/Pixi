import React from 'react';
import { useHistory } from 'react-router-dom';
import { API } from '../utils/API';
import { useAuth } from '../utils/context'

export function Logout(props) {
    const { auth, setAuth } = useAuth();
    props.setLogBool(!props.logBool)
    API.logout();
    setAuth({ ...auth, token: undefined });
    const history = useHistory();
    history.push('/login');
    // eslint-disable-next-line no-restricted-globals
    // location.reload();
    return (
        <div>
            
        </div>
    )
}
