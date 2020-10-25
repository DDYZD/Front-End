import React, {useState, useEffect} from 'react';
import * as S from '../../styled/mainForm/ContainerStyle';
import axios from 'axios';
import { Category_icon } from '../../styled/mainForm/CategoryStyle';

const Container = ({category}) => {

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
        <>
            {
                circle.map((info)=>{
                    return(
                        <>
                            {
                                category=="all" ?
                                    <S.Container_all key={info.id}>
                                        <S.Container_img>
                                        <img src={imgurl + info.background}/>
                                        </S.Container_img>
                                        <S.Container_explain>
                                            <S.Circle_name>
                                                {info.name} <>  |  </>
                                                {info.recruitment?
                                                    <>모집중</>
                                                :null
                                                }
                                            </S.Circle_name>
                                            <S.Circle_logo>
                                                <img src={imgurl + info.logo}/>
                                            </S.Circle_logo>
                                        </S.Container_explain>

                                        <S.Circles>
                                            <S.Circles_tag>
                                                {info.Tags}
                                            </S.Circles_tag>
                                        </S.Circles>
                                    </S.Container_all>

                                
                                :info["Tags"].includes(category) ?
                                    <S.Container_all key={info.id}>
                                        <S.Container_img>
                                        <img src={imgurl + info.background}/>
                                        </S.Container_img>

                                        <S.Container_explain>
                                            <S.Circle_name>
                                                {info.name} <>  |  </>
                                                {info.recruitment?
                                                    <>모집중</>
                                                :null
                                                }
                                            </S.Circle_name>
                                            <S.Circle_logo>
                                                <img src={imgurl + info.logo}/>
                                            </S.Circle_logo>
                                        </S.Container_explain>

                                        <S.Circles>
                                            <S.Circles_tag>
                                                {info.Tags}
                                            </S.Circles_tag>
                                        </S.Circles>
                                    </S.Container_all>
                                    
                                :category =="ETC" &&
                                    (info.Tags == "정보보안" || info.Tags == "게임" || info.Tags == "인공지능") ?
                                    <S.Container_all key={info.id}>
                                        <S.Container_img>
                                        <img src={imgurl + info.background}/>
                                        </S.Container_img>
                                        
                                        <S.Container_explain>
                                            <S.Circle_name>
                                                {info.name} <>  |  </>
                                                {info.recruitment?
                                                    <>모집중</>
                                                :null
                                                }
                                            </S.Circle_name>
                                            <S.Circle_logo>
                                                <img src={imgurl + info.logo}/>
                                            </S.Circle_logo>
                                        </S.Container_explain>

                                        <S.Circles>
                                            <S.Circles_tag>
                                                {info.Tags}
                                            </S.Circles_tag>
                                        </S.Circles>
                                    </S.Container_all>

                                :null
                            }
                            
                            
                            
                        </>
                    )
                })
            }
            
        </>
    )
}

export default Container;