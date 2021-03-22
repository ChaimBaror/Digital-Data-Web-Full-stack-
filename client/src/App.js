import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from './store/actions/index'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getusers } from './store/sagas/saga'


import axios from './api/HttpClient'

import AddNewUser from './components/addNewUser/AddNewUser';
import Showing from './components/showing/ShowingTableUser';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const App = () => {
  const dispatch = useDispatch();
  const globalState = useSelector(state => state);
  console.log("globalState");
    

  const [error, setError] = useState("")

  useEffect(() => {
    axios.get('/user').then(res => {
      const usersdb = [];
      for (let key in res.data) {
        usersdb.push({
          ...res.data[key],
        });
      }
      console.log("get users usersdb");
      dispatch(actions.usersFromDB(usersdb))

    }).catch(error => {
      setError(error.message);
    });
  }, [])


  const addUserArr = (event) => {
    console.log("add User app");
    const newMember = {
      name: event.name,
      age: event.age,
      email: event.email,
    }
    console.log("actions.adduser(user)");
    dispatch(actions.adduser(newMember))

  }

  const classes = useStyles();

  return (

    <Router>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-around" }}>
          <Typography variant="h4" className={classes.title}>
            <Link to={'/ShowUsers'}>Show Users</Link>
          </Typography>
          <Typography variant="h4" className={classes.title}>
            <Link to={'/addUser'}>add User</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div>{globalState.error? <Alert severity="error">{globalState.error}</Alert>:""}</div>

      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/addUser'}>addUser</Link></li>
          <li><Link to={'/ShowUsers'}>Show Users</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/addUser" exact>
          <AddNewUser clicked={addUserArr} />
        </Route>
        <Route path="/ShowUsers">
          <Showing  />
        </Route>
      </Switch>
    </Router>

  );
}


export default App;



