import React from 'react'
import styled from 'styled-components';

function header() {
  return (
    <Nav>
        <Logo>
            <img src='/images/logo.svg'></img>
        </Logo>
    </Nav>
    );
};

const Nav = styled.nav`
  height: 70px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090b13;

`;

const Logo = styled.a`
padding: 0;
margin-top: 4px;
width: 80px;
max-height: 70px;
font-size: 0;
display: inline-block;
img {
    display: block;
    width: 100%;
}
`;

export default header;