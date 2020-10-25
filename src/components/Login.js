import React, {useState} from 'react';
import * as S from '../styled/RLForm/authForm';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Login = () => {
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    //아이디
    const setUseridText = (e) => {
        setUserid(e.target.value);
    }
    //비밀번호
    const setPasswordText = (e) => {
        setPassword(e.target.value);
    }
    

    const login = (e) =>  {
        e.preventDefault();
        const loginuser = {
            id: userid,
            password: password
        }
        axios.post("http://10.156.147.146/login", loginuser)
        .then(returnData => {
            setError(returnData.data.message)
            localStorage.setItem("token",returnData["data"]["authorization"]);
        })
        .catch(function (errer){
            setError("아이디 또는 패시워드가 일치하지않습니다.")
        });
    }

    return (
        <S.AuthTemplateBlock>
            <S.Box>
                <form onSubmit={login}>
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
                    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                    <S.StyledButton>로그인</S.StyledButton>
                </form>
            </S.Box>
        </S.AuthTemplateBlock>
    )
}

export default Login

