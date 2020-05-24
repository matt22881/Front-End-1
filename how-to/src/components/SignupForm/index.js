import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from 'styled-components';

const WrapperForm = styled.form`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        `
    const CustomLabel = styled.label`
        padding: 1rem;
        display:flex;
        flex-direction:column;
    `
    const NewButton = styled.button`
        background-color: white;
        width: 100%;
        color: purple;
        padding: 10px;
        border-radius: 25px;
`

const Form = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(5, "Username is Too Short - Must Be Longer Than 5 Characters."),
  firstName: yup.string().required().min(2, "First Name Is Too Short"),
  lastName: yup.string().required().min(2, "Last Name Is Too Short"),
  email: yup.string().email().required("Must Be Valid Email"),
  emailConfirmation: yup
    .string()
    .oneOf([yup.ref("email"), null], "Emails must match"),
  password: yup
    .string()
    .required("Please Make A Password.")
    .min(6, "Password is Too Short - Must Be Longer Than 8 Characters.")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  account: yup.string(),
  notRobot: yup.boolean().oneOf([true]),
});

const SignupForm = () => {

    const [formState, setFormState] = useState({
        name: "",
        firstName: "",
        lastName: "",
        email: "",
        emailConfirmation: "",
        password: "",
        passwordConfirmation: "",
        account: "",
        notRobot: false,
    });
    console.log(formState);

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        Form.isValid(formState).then((valid) => {
        setButtonDisabled(!valid);
        });
    }, [formState]);

    useEffect(() => {
        Form.isValid(formState).then((valid) => {
          setButtonDisabled(!valid);
        });
      }, [formState]);
    
      const [post, setPost] = useState([]);
    
      useEffect(() => {
        axios
            .post('https://how-to-api-2.herokuapp.com/auth/register', formState)
            .then(res => {
                setPost(res.data)
                console.log(res)
        })
        .catch(err => {
            console.log(err.response)
        });
    }, [formState]);
    
      const formSubmit = e => {
        e.preventDefault();
        console.log('Info Sent');
      };
    
      console.log(post);

    const [errors, setErrors] = useState({
        name: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        account: "",
        notRobot: "",
    });

    const validateChange = (e) => {
        yup
        .reach(Form, e.target.name)
        .validate(e.target.value)
        .then((valid) => {
            setErrors({
            ...errors,
            [e.target.name]: "",
            });
        })
        .catch((err) => {
            setErrors({
            ...errors,
            [e.target.name]: err.errors[0],
            });
        });
    };

    const inputChange = (e) => {
        e.persist();
        validateChange(e);
        let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
    };

    

    return (
        <WrapperForm onSubmit={formSubmit}>                
        <CustomLabel htmlFor="name">
            Username
            <input
            type="text"
            name="name"
            value={formState.name}
            onChange={inputChange}
            placeholder="Enter Username."
            />
            {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        </CustomLabel>
        <CustomLabel htmlFor="firstName">
            First Name
            <input
            type="text"
            name="firstName"
            value={formState.firstName}
            onChange={inputChange}
            placeholder="Enter First Name."
            />
            {errors.firstName.length > 0 ? (
            <p className="error">{errors.firstName}</p>
            ) : null}
        </CustomLabel>        
        <CustomLabel htmlFor="lastName">
            Last Name
            <input
            type="text"
            name="lastName"
            value={formState.lastName}
            onChange={inputChange}
            placeholder="Enter Last Name."
            />
            {errors.lastName.length > 0 ? (
            <p className="error">{errors.lastName}</p>
            ) : null}
        </CustomLabel>        
        <CustomLabel htmlFor="email">
            Email
            <input
            type="text"
            name="email"
            value={formState.email}
            onChange={inputChange}
            placeholder="Enter Email."
            />
            {errors.lastName.length > 0 ? (
            <p className="error">{errors.lastName}</p>
            ) : null}
        </CustomLabel>        
        <CustomLabel htmlFor="emailConfirmation">
            Confirm Email
            <input
            type="text"
            name="emailConfirmation"
            value={formState.emailConfirmation}
            onChange={inputChange}
            placeholder="Confirm Email."
            />
        </CustomLabel>
        <CustomLabel htmlFor="password">
            Password
            <input
            type="password"
            name="password"
            value={formState.password}
            onChange={inputChange}
            placeholder="Enter Password."
            />
            {errors.password.length > 0 ? (
            <p className="error">{errors.password}</p>
            ) : null}
        </CustomLabel>        
        <CustomLabel htmlFor="passwordConfirmation">
            Confirm Password
            <input
            type="password"
            name="passwordConfirmation"
            value={formState.passwordConfirmation}
            onChange={inputChange}
            placeholder="Confirm Password."
            />
        </CustomLabel>
        <CustomLabel htmlFor="account">
            Editor or Subscriber
            <select
            name= "account"
            id= "account"
            value={formState.account}
            onChange={inputChange}
            >
            <option value="select-account">Please Select an Account</option>
            <option value="Editor">Editor</option>
            <option value="Subscriber">Subscriber</option>
            </select>
            {errors.account.length > 0 ? (
            <p className="error">{errors.account}</p>
            ) : null}
        </CustomLabel>
        <CustomLabel htmlFor="notRobot">
            I Am Not A Robot
            <input
            type="checkbox"
            id="notRobot"
            name="notRobot"
            checked={formState.notRobot}
            onChange={inputChange}
            />
            {errors.notRobot.length > 0 ? (
            <p className="error">{errors.notRobot}</p>
            ) : null}
        </CustomLabel>
        <NewButton disabled={buttonDisabled}>Login</NewButton>
        </WrapperForm>
    );
    };

export default SignupForm;