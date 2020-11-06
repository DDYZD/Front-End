import React, { useState,useEffect } from 'react';
import * as S from '../styled/IntroduceStyle';
import { imgurl, url } from '../modules/api'
import axios from 'axios';

const Introduce = () => {
    const [circle, setCircle] = useState(null);
    const [loading, setLoading] = useState(false);

    const circleinfo =  async () => {
        try{
            const res = await axios.get(url + "/circles");
            if(res.status === 200){
                setCircle(res.data)
                console.log(circle);
                console.log(res.data);
            }
        }
        catch(err){

        }
    }

    // const Endday = (circle) => {
    //     let toyear = getYear();
    //     let tomouth = getMouth();
    //     let today = getDate();

    //     circle.Endday
    // }

    useEffect(() => {
        setLoading(false);
        circleinfo()
        setLoading(true);
    },[])

    if(!loading) return(<div>Loading</div>);  
    if(!circle) return(<div>불러오기 실패!!</div>);

    return (
            <>
                {
                    circle.map((circle)=> {
                        return (
                            circle.name === "PANG" ?
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
                                        sdfjiwiekfm
                                    </S.Rectangle>
                                </S.Content>

                            </S.Club>
                            : null
                        )
                    })
                }
            </>
        )
}


export default Introduce;