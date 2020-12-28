import React, { useState,useEffect } from 'react';
import * as S from '../styled/IntroduceStyle';
import { imgurl, url } from '../modules/api'
import axios from 'axios';

const Introduce = (props) => {
    const [circle, setCircle] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { params } = props.match;
    const circleinfo =  async () => {
        try{
            const res = await axios.get(url + "/circles/info",{headers:{circleId: params.data}});
            if(res.status === 200){
                setCircle(res.data)
            }
        }
        catch(err){
            console.log(err);
        }
    }

    const onRequest = async (e) => {
        e.preventDefault();
        try{
            const headers = {'Authentication': `Bearer ${localStorage.getItem("token")}`}
            console.log(headers);
            const body={
                circleId: params.data
            }
            const res = await axios.post(url + "/circles/apply", body, headers);
            console.log(res.data)
        }
        catch(e) {
            setError(e);
        }
        alert("신청되었습니다.");
    }

    useEffect(() => {
        setLoading(false);
        circleinfo()
        setLoading(true);
    },[])

    console.log(params.data);

    if(!loading) return(<div>Loading</div>);  
    if(!circle) return(<div>불러오기 실패!!</div>);

    return (
            <>
                <S.Club key={circle.id}>

                    <S.ClubBackground>
                        <img src={imgurl + circle.background} alt="사진"/>
                    </S.ClubBackground>

                    <S.ClubName>
                        {circle.name}
                    </S.ClubName>

                    <S.ClubLogo>
                        <img src={imgurl + circle.logo} alt="사진"/>
                    </S.ClubLogo>

                    <S.Tags>
                        <S.TagsBox>
                            <S.Tag>
                            {circle.Tags}
                            </S.Tag>
                        </S.TagsBox>
                    </S.Tags>

                    <S.Line/>
                    <S.Content>
                        <S.Rectangle>
                            내용
                        </S.Rectangle>
                    </S.Content>

                    <S.Application>
                        <S.DDAY>
                            D-18;
                        </S.DDAY>

                        <S.AppButton onClick={onRequest}>
                            신청하기
                        </S.AppButton>
                    </S.Application>
                    

                </S.Club>
                  
                        
                  
                
            </>
        )
}


export default Introduce;