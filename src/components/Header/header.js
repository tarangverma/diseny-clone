import React from 'react'
import styled from 'styled-components';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth, storage, provider ,analytics} from "../../firebase"
import {useSelector , useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {selectUserPhoto , selectUserName , setUserLoginDetails} from "../../feature/users/userSlice"


const Header = (props) =>   {

  const dispatch = useDispatch();
  const history = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const authhh = () => { signInWithPopup(auth, provider)
    .then((result) => {
          setUser(result.user)
    }).catch((error) => {
        console.log(error);
    });
  };

  const setUser = (user) => {
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
      )
  }

  return (
    <Nav>
        <Logo>
            <img src='/images/logo.svg'></img>
        </Logo>
        <NavMenu>
          <a href='/home' >
          <img src='/images/home-icon.svg' alt='no-img'></img>  
          <span>HOME</span>
          </a>  
          <a>
          <img src='/images/search-icon.svg' alt='no-imgg'></img>  
          <span>SEARCH</span>
          </a>  
          <a href='/home' >
          <img src='/images/watchlist-icon.svg' alt='no-imge'></img>  
          <span>WATCHLIST</span>
          </a>  
          <a>
          <img src='/images/original-icon.svg' alt='no-imga'></img>  
          <span>ORIGINALS</span>
          </a>  
          <a>
          <img src='/images/movie-icon.svg' alt='no-imgc'></img>  
          <span>MOVIE</span>
          </a>
          <a>
          <img src='/images/series-icon.svg' alt='no-imgv'></img>  
          <span>SERIES</span>
          </a>    
        </NavMenu>
        <Login onClick={authhh}>LOGIN</Login>
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

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px; 

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

  img {
    height: 20px;
    min-height: 20px;
    width: 20px;
  }

  span {
    color: rgb(249, 249 , 249);
    font-size: 13px;
    letter-spacing: 1.2px;
    line-height: 1.08;
    padding: 2px 0;
    wight-space: nowrap;
    position: relative;

  &:before {
      background-color: rgb(249 , 249 , 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      left: 0px;
      content: "";
      height: 2px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
  }
}

&:hover {
  span:before {
    transform: scaleX(1);
    visibility: visible;
    opacity: 1 !important;
  }
}
}

   @media (max-width: 768px) {
     display: none;
   }
`;

const Login = styled.a`
 background-color: rgba(0, 0 , 0 , 0.6);
 padding: 8px 16px;
 text-transform: uppercase;
 letter-spacing: 1.5px;
 border: 1px solid #f9f9f9;
 border-radius: 4px;
 transition: all 0.2s ease 0s;

 &:hover {
  background-color: #f9f9f9;
  color: #000; 
 }
`;

export default Header;