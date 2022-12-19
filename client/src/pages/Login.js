import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import LoginHeader from "../images/login-header.png";

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
    <Navigate to="/me" />
  };

  return (
  <Container>

            {data ? (
              <Form.Text>
                Success!
              </Form.Text>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                <img src={LoginHeader} className="App-logo" alt="logo" height="100px"/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label                   
                        value={formState.email}
                        onChange={handleChange}>
                        Email address
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label
                      value={formState.password}
                      onChange={handleChange}>
                      Password
                  </Form.Label>
                   <Form.Control type="password" placeholder="Password" />
                </Form.Group>
 

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Open Sesame
                </Button>
              </Form>
              
            
            )}

            {error && (
              <Form.Text>
                {error.message}
              </Form.Text>
               
            )}
       </Container>
  
  );
}

export default Login;
