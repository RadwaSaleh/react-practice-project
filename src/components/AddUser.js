import React from "react";
import './AddUser.css';
import './UI/Card';
import Card from "./UI/Card";
import Button from "./UI/Button";
import "./UI/Button.css"

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
                <Button type="submit" className="button">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;