import Card from "../UI/Card";
import classes from './Adding.module.css';
import Button from "../UI/Button";
import { useRef, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Modal from "../UI/Modal";
const Adding=(props)=>{
    const nameRef=useRef();
    const ageRef=useRef();
    const collegeRef=useRef();
    const [error, setError]=useState();
    
    const addUser=(e)=>{
        e.preventDefault();
        const enteredName=nameRef.current.value;
        const enteredUserAge=ageRef.current.value;
        const enteredCollege=collegeRef.current.value;
        if (enteredName.trim().length===0 || enteredUserAge.trim().length===0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age.'
            });
            return; 
        }
        if (+enteredUserAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age.'
            });
            return;
        }
        props.onAdd(enteredName,enteredUserAge,enteredCollege);
        
        nameRef.current.value='';
        ageRef.current.value='';
        collegeRef.current.value='';
    }

    const errorhandler=()=>{
        setError(null);
    }

    return (
        <Wrapper>
            {error &&<Modal title={error.title} message={error.message} onConfirm={errorhandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUser} >
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" ref={nameRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" ref={ageRef}/>
                    <label htmlFor="college">College Name</label>
                    <input type="text" id="college" ref={collegeRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default Adding;  