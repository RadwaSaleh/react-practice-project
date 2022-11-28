import React from 'react';
import './ErrorModal.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm}/>
            <Card className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.onConfirm}>Close</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;