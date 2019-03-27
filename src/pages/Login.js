import React from 'react';
import Button from '../Components/Button';
import styled from 'styled-components';
import logo from './logo.png';

console.log(logo);

render() {
  return (
    <div>
        function () {
          return <img src={logo} alt="Logo" />;
        }
        <form>
          <label>
            Email:
            <input type="text" name="Email" />
            Password:
            <input type="password" name="Password" />
          </label>
          <input type="submit" value="Login" />
        </form>

    Don't have an account?
    <Button text='Create an Account'></Button>
    </div>
})

export default (SelectGrade);
