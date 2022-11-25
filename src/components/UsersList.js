import React from 'react';
import "./UsersList.css";
import Card from './UI/Card';

const UsersList = (props) => {
    return (
        <Card className="users">
            <ul>
                {props.usersList.map((user) => <li>{user.name} {user.age}</li>)}
            </ul>
        </Card>
    )
}

export default UsersList;