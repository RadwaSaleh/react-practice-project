import React, { useState, Fragment } from "react";
import './AddUser.css';
import './UI/Card';
import Card from "./UI/Card";
import Button from "./UI/Button";
import "./UI/Button.css";
import ErrorModal from "../components/UI/ErrorModal";

const AddUser = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(userName.trim() && userAge.trim() && userAge >= 1) {
            props.onAddUser(userName, userAge);
        }
        setUserName('');
        setUserAge('');
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value.trim());
    }

    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value.trim());
    }

    return (
        <Fragment>
            <ErrorModal/>
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
        </Fragment>

    )
}

export default AddUser;