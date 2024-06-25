import React from "react";
import Card from "../UI/Card";
import './AddUser.css';


const AddUser=()=>{

    const addUserhandler=(event)=>{
        event.preventDefault();
    }

    return(
        <Card className='input'>
            <form onSubmit={addUserhandler}>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username"/>

            <label htmlFor="age">Age</label>
            <input type="number" id="age"/>

            <button type="submit"> Add User</button>
            </form>
        </Card>
        
    )
}

export default AddUser;