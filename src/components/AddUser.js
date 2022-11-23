import React, { useState, useRef } from "react";
import './AddUser.css';
import './UI/Card';
import Card from "./UI/Card";
import Button from "./UI/Button";
import "./UI/Button.css"

const AddUser = () => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('');
    const userNameInputRef = useRef(null);
    const userAgeInputRef = useRef(null)

    const addUserHandler = (event) => {
        event.preventDefault();
        userNameInputRef.current.value = '';
        userAgeInputRef.current.value = '';
    }

    const userNameChangeHandler = (event) => {
        console.log(event.target.value);

    }

    const userAgeChangeHandler = (event) => {
        console.log(event.target.value);
    }

    return (
        <Card className="add-user">
            <form onSubmit={addUserHandler}>
                <div>
                    <label>Username</label>
                    <input type="text" onChange={userAgeChangeHandler} ref={userNameInputRef}/>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" onChange={userAgeChangeHandler} ref={userAgeInputRef}/>
                </div>
                <Button type="submit" className="button">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;