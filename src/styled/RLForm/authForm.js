import React from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #7F82D9;
    padding: 1rem;
    width: 328px;  
    & + &{
        margin-top: 1rem;
    }
`;

export const Footer = styled.div`
    margin-top: 2rem;
    text-align: center;
    a {
        color: black;
        text-decoration: none;
        &:hover{
            color: black;
        }
    }
`;

export const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`

export const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: black;
    /* 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Box = styled.div`
    .logo-area{
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    padding: 2rem;
    width: 500px;
    height: 700px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledButton = styled.button`
    color: #ffffff; 
    margin-top: 2rem;
    border: none;
    font-size: 1rem;
    width: 362px;
    height: 60px;
    cursor: pointer;

    background: #7F82D9;
    &:hover{
        background: #7578de;
    }
`;