import React from "react";
import './AddUser.css';
import './UI/Card';
import Card from "./UI/Card";

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(event)
    }
    return (
        <Card className="add-user">
            <form onSubmit={addUserHandler}>
                <div>
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number"/>
                </div>
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
}

export default AddUser;