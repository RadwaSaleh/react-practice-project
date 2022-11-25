import React, { useState } from "react";
import './AddUser.css';
import './UI/Card';
import Card from "./UI/Card";
import Button from "./UI/Button";
import "./UI/Button.css"

const AddUser = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(userName.trim() && userAge.trim() && userAge >= 1) {
            console.log(userName.trim());
            console.log(userAge);
            props.getUserInfo(userName.trim(), userAge.trim());
        }
        setUserName('');
        setUserAge('');
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value.trim());
    }

    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
    }

    return (
        <Card className="add-user">
            <form onSubmit={addUserHandler}>
                <div>
                    <label>Username</label>
                    <input type="text" value={userName} onChange={userNameChangeHandler}/>
                </div>
                <div>
                    <label>Age (Years)</label>
                    <input type="number" min="1" value={userAge} onChange={userAgeChangeHandler}/>
                </div>
                <Button type="submit" className="button">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;