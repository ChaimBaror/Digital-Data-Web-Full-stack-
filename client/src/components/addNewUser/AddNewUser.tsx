import React, { useState } from 'react';

interface props {
    clicked: (e: {}) => void;
}

const AddNewUser = (props: props) => {

    const [state, setState] = useState({name:""});

    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("handleSubmit : " + state.name);
        if (event.name == "") {
            return alert('error')
        }
     
        console.log(state);
        props.clicked({
            ...state
        })
        setState({name:""});
    }
    const handleInputChange = (event: any) => {
        setState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };


    return (
<div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{ textAlign: "center", width: '200px', border: "1px solid #ccc" }}>
            <form onSubmit={handleSubmit}>
                <label >User Name :
                <input type="text" name="name" onChange={handleInputChange} />
                </label>
                <label >Email :
                <input type="email" name="email" onChange={handleInputChange} />
                </label>
                <label >Age :
                <input type="number" name="age" onChange={handleInputChange} />
                </label>
                <input type="submit" value="Add User" />
            </form>
            </div>
        </div>
    )

}


export default AddNewUser;
