import React, { useState } from 'react';
import AddNewUser from './components/addNewUser/AddNewUser';
import Showing from './components/showing/Showing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const App = () => {

  const [state, setstate] = useState([]);

  const addUserArr = (event) => {
    const newMember = {
      id: Math.random() * 1000000,
      userName: event.name,
      age: event.age,
      email: event.email,
    }
    setstate(
      [...state, newMember])
    // console.log(http.post('/post', newMember))
    console.log("member", state);
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
