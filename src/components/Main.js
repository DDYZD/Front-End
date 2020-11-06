import React from 'react';
import Header from './Header';
import Body from './Body';

const Main = () => {
    
    
    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}

export default Main;

/*
if(!localStorage.getItem("token")){
    window.location.href="/login";
    if(api로 토큰이 유효한지 확인)
}
*/