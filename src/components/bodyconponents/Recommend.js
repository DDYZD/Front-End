import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as S from '../../styled/mainForm/RecommedStyle';
import * as SS from '../../styled/mainForm/ContainerStyle';
import {Link} from 'react-router-dom';

const Recommend = () => {

    const [circle, setCircle] = useState(null);
    const [loading, setLoading] = useState(false);
    const imgurl = "http://10.156.147.146";


    useEffect(() => {
        setLoading(false);
        const circles = async () => {
            
            const response = await axios.get("http://10.156.147.146/circles");
            setCircle(response['data']);
        };
        circles();
        setLoading(true);
    },[])
    
    if(!loading) return(<div>Loading</div>);  
    if(!circle) return(<div>불러오기 실패!!</div>);
    

    return(
        <S.Recommend>
            <S.Wrap>
                <S.Recommendation> {/*추천동아리 소개말 */}
                
                </S.Recommendation>
                <S.Recommendation_2> {/*추천동아리 목록 */}
                {
                circle.map((info)=>{
                    const view_url = '/introduce/' + info.id;
                    return(
                        <>
                            {
                                info.name === "PANG" || info.name === "LAPIO" || info.name === "Flosvia"?
                                <SS.Container key={info.id}><Link to={view_url}>
                                    <SS.Container_img>
                                    <img src={imgurl + info.background} alt="사진"/>
                                    </SS.Container_img>

                                    <SS.Container_explain>
                                        <SS.Circle_name>
                                            {info.name} <>  |  </>
                                                {info.recruitment?
                                                    <>모집중</>
                                                :null
                                                }
                                        </SS.Circle_name>
                                        <SS.Circle_logo>
                                            <img src={imgurl + info.logo} alt="사진"/>
                                        </SS.Circle_logo>
                                    </SS.Container_explain>

                                    <SS.Circles>
                                        <SS.Circles_tag>
                                            {info.Tags}
                                        </SS.Circles_tag>
                                    </SS.Circles>
                                </Link></SS.Container>
                            :null
                            }
                            
                        </>
                    )
                })
            }
                </S.Recommendation_2>
            </S.Wrap>
        </S.Recommend>
    )
}

export default Recommend;