import React from 'react';
import styled from 'styled-components';

export const Category = styled.div`
    width: 1400px;
    height: 100px;
    background-color: rgb(58, 55, 55);
    position: relative;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    margin-bottom: 100px;
`;

export const Category_icon = styled.div`
    text-align: center;
    align-items: center;
    width: 150px;
    height: 70px;
    position: relative;
    top: 0px;
    left: 300px;
    color: white;
    padding: 20px 0 10px 0;
    border-right: solid black 2px;
    a {
    color: white;
    }
    &:hover {
    background-color: rgb(127, 130, 217);
    cursor: pointer;
    }
    img{
        bottom: 10px;
    }
`;

export const Category_icon_left = styled.div`
    text-align: center;
    width: 150px;
    height: 70px;
    position: relative;
    left: 300px;
    color: white;
    padding: 20px 0 10px 0;
    border-right: solid black 2px;
    border-left: solid black 2px;
    a {
        color: white;
    }
    &:hover {
        background-color: rgb(127, 130, 217);
        cursor: pointer;
    }
`;

export const Categroy_image = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 auto;
`;