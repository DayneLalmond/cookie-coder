import Button from 'react-bootstrap/Button';
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
 
          {/* Form for EmailAdress */}
              <Form.Group className="mb-3">
                <Form.Label>
                  Username
                </Form.Label>
                <Form.Control
                name="username" 
                type="text"
                value={formState.username} 
                onChange={handleChange} 
                placeholder="John Dough" />
              </Form.Group>

              <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Email address
                </Form.Label>
                <Form.Control
                name="email" 
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="johndough@cookiejar.com" />
              </Form.Group>

          {/* From For Password */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Password
                </Form.Label>
                <Form.Control
                name="password" 
                type="password"
                value={formState.password}
                onChange={handleChange}
                placeholder="Secret Recipe" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Signup
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
