import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddNewUser from './components/addNewUser/AddNewUser';
import Showing from './components/showing/Showing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from './api/HttpClient'
import { AppBar, Toolbar, Typography } from '@material-ui/core';




const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const App = () => {
  const [loading, setLoading] = useState(true)
  const [state, setstate] = useState([

  ]);

  useEffect(() => {
    axios.get('/user').then(res => {
      const usersdb = [];
      for (let key in res.data) {
        usersdb.push({
          ...res.data[key],
        });
      }
      console.log(usersdb[0]);
      setstate(usersdb)

    }).catch(err => {
      console.log(err);
    });
  }, [])


  const addUserArr = (event) => {
    const newMember = {
      id: Math.random() * 1000000,
      name: event.name,
      age: event.age,
      email: event.email,
    }
    setstate(
      [...state, newMember]
    )
    const user = JSON.stringify(newMember)
    axios.post('/user', { user }).then(res => console.log(res))


  }

  const classes = useStyles();


  return (
    <div>
      <Router>
        <AppBar position="static">
          <Toolbar style={{ justifyContent: "space-around" }}>
            <Typography variant="h4" className={classes.title}>
              <Link to={'/ShowUsers'}>Show Users</Link>
            </Typography>
            <Typography variant="h4" className={classes.title}>
              <Link to={'/'}>add User</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <nav>
          <ul>
            <li><Link to={'/'}>add User</Link></li>
            <li><Link to={'/ShowUsers'}>Show Users</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <AddNewUser clicked={addUserArr} />
          </Route>
          <Route path="/ShowUsers">
            <Showing data={state} />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
