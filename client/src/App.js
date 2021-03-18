import React, { useState, useEffect } from 'react';
import AddNewUser from './components/addNewUser/AddNewUser';
import Showing from './components/showing/Showing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from './api/HttpClient'



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
          id: key
        });
      }
      setstate(
        [...state, ...usersdb]
      )
  
    })
      .catch(err => {
        setLoading(false);
      });
  },[] )
  const addUserArr = (event) => {
    const newMember = {
      id: Math.random() * 1000000,
      name: event.name,
      age: event.age,
      email: event.email,
    }
    
    console.log("newMember :",newMember);
    const user = JSON.stringify(newMember)
    axios.post('/user',{user}).then(res=>console.log(res))

    setstate(
      [...state, newMember]
    )
  }
  


  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to={'/'}>add User Arr</Link></li>
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
