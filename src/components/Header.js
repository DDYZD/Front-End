import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styled/mainForm/headerStyle';

const Header = () => {

    const onTokenremove = () => {
        localStorage.removeItem('token')
        window.location.href="/";
    }

    return (

        !localStorage.getItem("token") ?
        <S.Header>
            <S.Login>
                <Link to="/Login">로그인</Link>
            </S.Login>
            <S.Register>
                    <Link to="/register">회원가입</Link>
            </S.Register>
        </S.Header>
        :<S.Header>
            <S.Logout onClick={onTokenremove}>
                로그아웃
            </S.Logout>
        </S.Header>
        
    )
}

export default Header;

//window.location.href="/login";