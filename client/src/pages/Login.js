import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Clipboard from './Clipboard';
import Navbar from '../components/Nav';


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Dashboard from '../components/Dashboard';

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
    
    // window.location.reload(false);
    // ReactDOM.render(<Clipboard />, document.getElementById('check'));
};


  
  return (
    <Container>
      {data ? (
        <Form.Text>
          Success!
        </Form.Text>
      ) : (
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              Email
            </Form.Label>
            <Form.Control
            name="email"
            type="email" 
            value={formState.email}
            onChange={handleChange} 
            placeholder="johndough@cookiejar.com" />
          </Form.Group>

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
            Login
          </Button>
          {/* <Link type="submit" to="/Clipboard">Login</Link> */}

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
