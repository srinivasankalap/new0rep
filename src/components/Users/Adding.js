import Card from "../UI/Card";
import classes from './Adding.module.css';
import Button from "../UI/Button";
import { useState } from "react";
import Modal from "../UI/Modal";
const Adding=(props)=>{
    const [enteredUsername, setUsername]=useState('');
    const [enteredAge, setAge]=useState('');
    const [error, setError]=useState();
    
    const addUser=(e)=>{
        e.preventDefault();
        if (enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age.'
            })
            return; 
        }
        if (enteredAge<1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age(> 0).'
            })
            return;
        }
        props.onAdd(enteredUsername,enteredAge);
        setUsername('');
        setAge('');
    }

    const usernameChange=(e)=>{
        setUsername(e.target.value);
    }
    const ageChange=(e)=>{
        setAge(e.target.value);
    }
    const errorhandler=()=>{
        setError(null);
    }

    return (
        <div>
            {error &&<Modal title={error.title} message={error.message} onConfirm={errorhandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUser} >
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={enteredUsername} onChange={usernameChange}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChange}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default Adding;  