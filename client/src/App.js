import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from './store/actions/index'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import axios from './api/HttpClient'

import AddNewUser from './components/addNewUser/AddNewUser';
import Showing from './components/showing/ShowingTableUser';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const App = () => {

  const dispatch = useDispatch();
  const [error, setError] = useState("")
  const [state, setstate] = useState([]);

  useEffect(() => {
    // const alluserStateGlobal = useSelector(state => state)
    // console.log("app use Effect", alluserStateGlobal);

    axios.get('/user').then(res => {
      const usersdb = [];
      for (let key in res.data) {
        usersdb.push({
          ...res.data[key],
        });
      }
      console.log("get users usersdb");
      setstate(usersdb)
    }).catch(err => {
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
    // const user = JSON.stringify(newMember)
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
            <Showing data={state} />
          </Route>
        </Switch>
      </Router>

  );
}


export default App;



