import React, { useEffect, useState } from 'react'
import { validationRules } from './FormVanilla '


interface props {
    clicked: (e: {}) => void;
}
interface fields {
    name: string,
    email: string,
    age: string,
}

const AddNewUser = (props: props) => {
    const fields = ['name', 'age', 'email'];

    const [state, setState] = useState({
        signupForm: { isValid: false },
        name: { value: '', isTouched: false, isValid: false, errors: [] },
        age: { value: '18', isTouched: true, isValid: false, errors: [] },
        email: { value: '', isTouched: false, isValid: false, errors: [] },
    });


    const handleSubmit = (event: any) => {
        if (state.name.isValid && state.name.isValid) {
            event.preventDefault();
            console.log(state);
            props.clicked({
               name:state.name.value,
               email:state.email.value,
               age:state.age.value,
            })
            alert("נשלח בהצלחה")
        }
        else {
            alert("נא מלא את כל השדות תקינים")
        }

    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newState = { ...state };
        const namefield = event.target.name; // name
        if (namefield == "name") {
            newState.name.value = event.target.value;
        }
        if (namefield == "age") {
            newState.age.value = event.target.value;
        }
        if (namefield == "email") {
            newState.email.value = event.target.value;
        }
        console.log(newState.email.isValid);

        validateForm(newState, namefield);
    };

    const validateForm = (newState: any, namefield: any) => {
        newState = newState || { ...state };
        fields.map(fieldName => {
            let newField = newState[fieldName];
            newField.errors = [];
            newField.isValid = true;
            if (namefield == 'name') {
                formValidationRules.name.map(vRule => {
                    if (!vRule.rule(state.name.value)) {
                        newField.errors.push(vRule.message);
                        newField.isValid = false;
                    }
                    newState[fieldName] = newField;
                })
            }
            if (namefield == 'email') {
                formValidationRules.email.map(vRule => {
                    if (!vRule.rule(state.email.value)) {
                        newField.errors.push(vRule.message);
                        newField.isValid = false;
                    }
                    newState[fieldName] = newField;
                })
            }
        })
        setState(newState);
    }
    const formValidationRules = {
        'name': [{ rule: validationRules.required, message: 'name is required' }],
        'age': [{ rule: validationRules.age, message: 'age number is invalid' }],
        'email': [{ rule: validationRules.required, message: 'Email is required' }, { rule: validationRules.email, message: 'Email is invalid' }],
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: "center", width: '200px', border: "1px solid #ccc" }}>
                <form onSubmit={handleSubmit}>
                    <label >User Name : </label>
                    <input
                        type="text" name="name" onChange={handleInputChange} required />
                    {state.name.isTouched && state.name.errors.length > 0 && state.name.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))}

                    <label >Email :
                <input type="email" name="email" onChange={handleInputChange} required />
                    </label>
                    <label >Age :
                <input min="0" max="99" type="number" name="age" onChange={handleInputChange} required />
                    </label>
                    <br />
                    <input type="submit" value="Add User" />
                </form>
            </div>
        </div>
    )

}


export default AddNewUser;
