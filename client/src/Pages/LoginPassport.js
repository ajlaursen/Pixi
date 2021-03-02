import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from '../utils/API';
import { useAuth } from '../utils/context';
import { Login, Signup } from '../Components/Login';

export function LoginPassport() {
  const [login, setLogin] = useState('login');

  const togglePage = () => {
    if (login === 'signup') {
      setLogin('login');
    } else {
      setLogin('signup');
    }
  };

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [userSignup, setUserSignup] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConf: '',
  });

  const { auth, setAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push('/account');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function _handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function _handleChangeSignup(e) {
    const { name, value } = e.target;
    setUserSignup({ ...userSignup, [name]: value });
  }

  function _handleSubmit(e) {
    e.preventDefault();

    API.login(user)
      .then((token) => {
        setAuth({ ...auth, token });
        console.log(auth);
          if (auth.token === undefined || !auth) {
          setTimeout(() => {
            history.push('/login');
          });
        } else {
          history.push('/account');
        }
      })
      .catch((err) => {
        // probably need a better way to notify on this error
        console.log('err', err);
      });
  }

  function _handleUserSignup(e) {
    e.preventDefault();

    if (userSignup.password === userSignup.passwordConf) {
      API.createUser(userSignup)
        .then((token) => {
          setAuth({ ...auth, token });
          console.log(auth);
            if (auth.token === undefined || !auth) {
                setTimeout(() => {
                    history.push('/login');
                });
            } else {
                history.push('/account');
            }
        })
        .catch((err) => {
          // probably need a better way to notify on this error
          console.log('err', err);
        });
    } else {
      console.log('userSignup.password', userSignup.password);
      console.log('userSignup.passwordConf', userSignup.passwordConf);
    }
  }

  if (login === 'login') {
    return (
        <Login
          _handleSubmit={_handleSubmit}
          _handleChange={_handleChange}
          user={user}
          togglePage={togglePage}
        />
    );
  } else {
    return (
        <Signup
          _handleUserSignup={_handleUserSignup}
          _handleChangeSignup={_handleChangeSignup}
          userSignup={userSignup}
          togglePage={togglePage}
        />
    );
  }
}
