import React, { useState } from 'react';
import * as S from '../styled/RLForm/authForm';
import axios from 'axios';

const Changepassword = () => {
    const [ nowpw, setNowpw ] = useState('');
    const [ newpw, setnewpw ] = useState('');
    const [ newpwcomfirm, setnewpwcomfirm ] = useState('');
    const [ error, setError ] = useState(null);

    //현재비밀번호
    const setNowpwText = e => {
        setNowpw(e.target.value);
    }
    //새 비밀번호
    const setnewpwText = e => {
        setnewpw(e.target.value);
    }
    //새 비밀번호확인
    const setnewpwconfirmText = e => {
        setnewpwcomfirm(e.target.value);
    }

    const send = e => {
        e.preventDefault();
        if([nowpw,newpw,newpwcomfirm].includes('')){
            setError("빈 칸을 모두 입력해주세요.")
        }
        else if(newpw !== newpwcomfirm){
            setError("새 비밀번호가 일치하지 않습니다.")
        }
        else {
            send_pw();
        }
    }

    const send_pw = () => {
        const password = {
            nowPassword: nowpw,
            newPassword: newpw
        }
        const headers={'Authentication': `Bearer ${localStorage.getItem("token")}`}
        console.log(headers);
        axios.post("http://10.156.147.146/changePassword",password, {headers:headers})
        .then((res) => {
            console.log(res.data);
            setError(res.data.message);
        })
        .catch((err) => {
            console.error(err);
            setError("비밀번호 변경 실패");
        });
    }

    return (
        <S.AuthTemplateBlock>
            <S.Box>
                <form onSubmit={send}>
                    <S.StyledInput 
                        name="nowpw"
                        placeholder="현재 비밀번호"
                        type="password"
                        id="nowpw"
                        onChange={setNowpwText}
                        value={nowpw}
                    />
                    <S.StyledInput 
                        name="newpw"
                        placeholder="새 비밀번호"
                        type="password"
                        id="newpw"
                        onChange={setnewpwText}
                        value={newpw}
                    />
                    <S.StyledInput 
                        name="newpwcomfirm"
                        placeholder="새 비밀번호확인"
                        type="password"
                        id="newpwcomfirm"
                        onChange={setnewpwconfirmText}
                        value={newpwcomfirm}
                    />
                    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                    <S.StyledButton>비밀번호 변경</S.StyledButton>
                </form>
            </S.Box>
        </S.AuthTemplateBlock>
    )
}

export default Changepassword;