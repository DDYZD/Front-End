import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styled/mainForm/headerStyle';

const Header = () => {

    return (
        <>
        <S.Header>
            <S.Login>
                <Link to="/Login">로그인</Link>
            </S.Login>

            <S.Register>
                <Link to="/register">회원가입</Link>
            </S.Register>
        </S.Header>
        </>
    )
}

export default Header;