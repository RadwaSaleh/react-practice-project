import React, {Fragment, useState} from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import ErrorModal from './components/UI/ErrorModal';

function App(props) {
    const [usersList, setUsersList] = useState([]);
    let list = [];
    let userObj;
    const addUserHandler = (name, age) => {
        console.log(name + ' ' + age);
        setUsersList((prevState) => {
            return [...prevState, {id:Math.random().toString(), name: name, age: age}];
        });
    }

  return (
    <Fragment>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList usersList={usersList} />
    </Fragment>
  );
}

export default App;
