import react from 'react';
import styled from 'styled-components';

//컨데이너 스타일 (동아리 목록)

export const Container_box = styled.div`
    width: 1420px;
    margin: 0 auto;
    background-color: black;
`;

export const Container_subbox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;



export const Container = styled.div`
    width: 305px;
    height: 280px;
    border-radius: 20px;
    padding: 0px;
    background-color: rgb(246, 246, 246);
    margin: 0 25px 40px 25px;
`;

export const Container_img = styled.div`
    width: 305px;
    height: 160px;
    overflow: hidden;
    img{
        width: 305px;
        border-radius: 20px 20px 0 0;
    }
`;

export const Container_all = styled.div`
    width: 305px;
    height: 280px;
    border-radius: 20px;
    padding: 0px;
    color: #ffffff;
    background-color: rgb(58, 55, 55);
    margin: 0 25px 40px 25px;
`;

export const Container_explain = styled.div`
    height: 63px;
    position: relative;
    left: 10px;
    width: 285px;
    border-bottom: solid rgb(156, 156, 156);
    a{
        text-decoration: none;
    }
    img{
        width: 50px;
        height: 50px;
        float: right;
        border-radius: 50%;
    }
`;

export const Circle_name = styled.div`
    position: relative;
    top: 20px;
`;

export const Circle_logo = styled.div`
    position: relative;
    bottom: 15px;
`;

export const Circles = styled.div`
    height: 30px;
`;

export const Circles_tag = styled.div`
    float: left;
    margin: 14px 10px 9px 10px;
`;

export const Body = styled.div`
    background-color: black;
`;