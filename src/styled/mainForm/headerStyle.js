
import styled from 'styled-components';

export const Main_image = styled.div`
    text-align: center;
    position: relative;
    background-color: black;
    left: 45px;
    height: 80px;
    width: 100px;
`;


export const Header = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    height: 80px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    a{
        text-decoration: none;
        color: white;
        &:visited{
            color: white;
        }
        &:hover{
            color: rgb(122, 129, 255)
        }
    }
`;

export const Login = styled.div`
    font-size: 18px;
    float: right;
    color: white;
    top: 25px;
`;

export const Register = styled.div`
    font-size: 18px;
    right: 21px;
    margin-left: 10px;
    top: -2px;
    color: white;
`;

export const Logout = styled.div`
    border: none;
    background-color: black;
    color: white;
    font-size: 18px;
    cursor: pointer;
    &:hover{
        color: rgb(122, 129, 255)
        
    }
`;