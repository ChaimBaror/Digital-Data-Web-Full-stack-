import { Button, FormGroup, Input, makeStyles } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { validationRules } from './FormVanilla '


interface props {
    clicked: (e: any) => void;
}
interface fields {
    name: string,
    email: string,
    age: string,
}
const useStyles = makeStyles({
    erroressage: {
        color: '#10C761',
        fontWeight: 'bold',
        fontSize: '0.9em',
        display: 'block',
        textAlign: 'center',
        marginTop: '5px',

    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '0.9em',
        display: 'block',
        textAlign: 'center',
        marginTop: '5px',
    },
});
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
                name: state.name.value,
                email: state.email.value,
                age: state.age.value,
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
        else if (namefield == "age") {
            newState.age.value = event.target.value;
        }
        else if (namefield == "email") {
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

    const classes = useStyles();

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: "center", width: '300px', border: "1px solid #ccc" ,margin:"25px"}}>
                <FormGroup >
                    <label >User Name  </label>
                    <Input
                        type="text" name="name" onChange={handleInputChange} required />
                    {/* {state.name.isTouched && state.name.errors.length > 0 && state.name.errors.map((err, i) => (<span key={i} className="error-message">{err}</span>))} */}
                    {state.name.isValid ? (<span className={classes.erroressage}>good name</span>) : (<span className={classes.error}>whis is name</span>)}

                    <label >Email    </label>
                    <Input type="email" name="email" onChange={handleInputChange} required />
                    {state.email.isValid ? (<span className={classes.erroressage}>email ....</span>) : (<span className={classes.error}>email....</span>)}

                    <label >Age    </label>
                    <Input  type="number" name="age" onChange={handleInputChange} required />

                   
                </FormGroup>
                <Button color="primary" type="submit" onClick={handleSubmit} >Add User</Button>

            </div>
        </div>
    )

}


export default AddNewUser;
