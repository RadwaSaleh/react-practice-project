import React, {Fragment, useState} from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App(props) {
    const [user, setUser] = useState();
    let userObj
    const getUserInfo = (name, age) => {
        userObj = {name: name, age: age};
        console.log(userObj);
        setUser(userObj);
    }
    
  return (
    <Fragment>
        <AddUser getUserInfo={getUserInfo}/>
        <UsersList user={user}/>
    </Fragment>
  );
}

export default App;
