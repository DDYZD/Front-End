import React, { useState } from 'react';
import * as S from '../styled/RLForm/authForm';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Register = () => {
    const [usercode, setUsercode] = useState('');
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [phoneNumber, SetPhoneNumber] = useState('');
    const [error, setError] = useState(null);

    //코드
    const setUsercodeText = e => {
        setUsercode(e.target.value);
    };
    //아이디
    const setUseridText = e => {
        setUserid(e.target.value);
    }
    //비밀번호
    const setPasswordText = e => {
        setPassword(e.target.value);
    }
    //비밀번호확인
    const setPasswordConfirmText = e => {
        setPasswordConfirm(e.target.value);
    }
    //전화번호
    const SetPhoneNumberText = e => {
        SetPhoneNumber(e.target.value);
    }
    const send = e => {
        e.preventDefault();
        const isNumber = /[0-9]/;

        if([usercode,userid,password,passwordConfirm,phoneNumber].includes('')){
            setError("빈 칸을 모두 입력해주세요.")
        }
        else if( password !== passwordConfirm ){
            setError("비밀번호가 일치하지 않습니다.")
        }
        else if(!isNumber.test(phoneNumber) || phoneNumber.length != 11){
            setError("휴대폰 번호를 다시 확인해주세요.")
        }
        else {
            send_user();
        }

    }

    const send_user = () =>  {
        const registeruser = {
            code: usercode,
            id: userid,
            password: password,
            phoneNumber: phoneNumber
        }
        axios.post("http://10.156.147.146/signup", registeruser)
            .then((res) => {
                console.log(res.data);
                setError(res.data.message);
            })
            .catch((err) => {
                console.error(err);
                setError("코드가 일치하지 않습니다.");
            });
        // axios.post("http://10.156.147.146/signup", registeruser)
        // .then(returnData => {
        //     setError(returnData.data.message)
        // })
        // .catch(function (error){
        //     setError("회원가입 실패")
        // })
    }

    return (
        <S.AuthTemplateBlock>
            <S.Box>
                <form onSubmit={send}>
                    <S.StyledInput 
                        name="code"
                        placeholder="코드"
                        onChange={setUsercodeText}
                        value={usercode}
                    />
                    <S.StyledInput 
                        name="userid"
                        placeholder="아이디"
                        onChange={setUseridText}
                        value={userid}
                    />
                    <S.StyledInput 
                        name="password"
                        placeholder="비밀번호"
                        type="password"
                        id="password"
                        onChange={setPasswordText}
                        value={password}
                    />
                    <S.StyledInput 
                        name="passwordConfirm"
                        placeholder="비밀번호확인"
                        type="password"
                        id="passwordConfirm"
                        onChange={setPasswordConfirmText}
                        value={passwordConfirm}
                    />
                    <S.StyledInput 
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="전화번호(숫자만기입)"
                        onChange={SetPhoneNumberText}
                        value={phoneNumber}
                    />
                    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                    <S.StyledButton>회원가입</S.StyledButton>
                </form>
            </S.Box>
        </S.AuthTemplateBlock>
    );
}

export default Register;

// connect(
//     (state) => ({
//         form: state.auth.getIn(['login', 'form'])
//     }),
//     (dispatch) => ({
//         AuthActions: bindActionCreators(authActions, dispatch)
//     })
// )(Login);