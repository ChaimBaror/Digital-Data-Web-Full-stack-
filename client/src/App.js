import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AddNewUser from './components/addNewUser/AddNewUser';
import Showing from './components/showing/ShowingTableUser';
import ProductDetail from './components/productDetail/productDetail';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const App = () => {

  const globalState = useSelector(state => state);
  
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
          <AddNewUser />
        </Route>
        <Route path="/ShowUsers">
          <Showing  />
        </Route>
        <Route path="/Products/:productId">
          <ProductDetail  />
        </Route>
      </Switch>
    </Router>

  );
}


export default App;



