import Button from 'react-bootstrap/Button';
import SignUpHeader from "../images/signup-header.png";
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';


import React, { useState } from 'react';
// Breakes the code importing Form above
// import { Form, Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
console.log(data)

  const handleChange = (event) => {
    const { name, value } = event.target;


    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
<Container>

            {error ? (
              <Form.Text>
                Success!
              </Form.Text>
            ) : (
          <Form onSubmit={handleFormSubmit}>
             <img src={SignUpHeader} className="Signup" alt="logo" height="100px"/>
 
          {/* Form for EmailAdress */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label                  
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}>Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Label                  
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}>Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

          {/* From For Password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                   name="password"
                   type="password"
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
                Let's Go!
              </Button>
            </Form>

            )}

            {error && (
              <Form.Text className="my-3 p-3 bg-danger text-white">
                {error.message}
              </Form.Text>
            )}
</Container>

  );
};

export default Signup;
