import React,{ useState, useReducer } from 'react';
import {reducer} from './Reducer'

const users = [
    {id:1, name:"mehedi hassan"},
    {id:2, name:"sohel rana"},
    {id:3, name:"naime hossain"},
    {id:4, name:"basher hossen"}
];

const Modal =({modalText})=>{
    return (<h3>{modalText}</h3>)
};


const UseReduce = () => {
    const initialState = {
        name: users,
        modalText: "",
        isModelText: "false"
    }
    // const[name, setName]= useState (user);
    // const[modalText, setModalText]= useState ("");
    // const[isModalText, setIsModalText]= useState (false);
    const[newName, setNewName]= useState ("");
    const [nameState, dispatch] =useReducer(reducer, initialState )

    const handleSubmit =(e) => {
        e.preventDefault();

            const addedName = {id: new Date().getTime().toString(), name: newName}
            dispatch({type: "add", payload: addedName})
            setNewName("");
    }
    const handleRemove= (id)=> {
        dispatch({type: "remove", payload: id})
    }
    return (
        <div>
            <h3>name list</h3>
            <form type="text" onSubmit={handleSubmit}>
            <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                <button type="submit" >Submit</button>
            </form>
            {nameState.isModalText && <Modal modalText={nameState.modalText} />}
            {nameState.name.map((user)=>{
                const {id, name} = user;
                return (
                <li key={id}>{name} <button onClick={()=>handleRemove(id)}>Remove</button></li>)
            })}
        </div>
    );
};

export default UseReduce;