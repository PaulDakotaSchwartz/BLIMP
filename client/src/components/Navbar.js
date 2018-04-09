import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import LoginButton from './LoginButton';
import LoginMenu from './LoginMenu';

import { update } from '../services/withUser';
import "../styles/style.css";

const Navbar = (props) => {
  const { user } = props;
  const username = user ? user.username : null;
  const handleLogIn = () => {
    props.history.push('/login');
  };
  const handleLogOut = () => {
    axios.delete('/api/auth')
      .then(() => {
        // unsets the currently logged in user. all components wrapped in withUser
        // will be updated with a null user and rerender accordingly
        update(null);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <AppBar 
      title="BLIMP - Budget Line Item Management Program"
      
      style={{
      margin: '0 auto',
      border: '2px solid rgb(1,1,62)',
      backgroundColor: 'rgb(1,1,62)',
      }}

      showMenuIconButton={true}

      // Icon and drop down for current logged in user and logout option.
      iconElementRight={user ?
        <LoginMenu username={username} onLogOut={handleLogOut} />
        : <LoginButton onClick={handleLogIn} />}
    />
  )
};

export default withRouter(Navbar);
