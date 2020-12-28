import React, {useState, useEffect, useHistory } from 'react';
import * as S from '../../../styled/mainForm/ContainerStyle';
import { imgurl, url } from '../../../modules/api';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Containerlist = ({category}) => {
    const [circle, setCircle] = useState(null);
    const [loading, setLoading] = useState(false);

    const circleinfo =  async () => {
        try{
            const res = await axios.get(url + "/circles");
            if(res.status === 200){
                setCircle(res.data)
            }
        }
        catch(err){

        }
    }

    useEffect(() => {
        setLoading(false);
        circleinfo();
        setLoading(true);
    },[]);

    if(!loading) return(<div>Loading</div>);  
    if(!circle) return(<div>불러오기 실패!!</div>);
    
    return(
        <>
        {
            circle.map((info) => {
                const view_url = '/introduce/' + info.id;

                return(
                    category==="all" ?
                        <S.Container_all key={info.id} ><Link to={view_url}>
                            <S.Container_img>
                                <img src={imgurl + info.background} alt="사진"/>
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
                                    <img src={imgurl + info.logo} alt="사진"/>
                                </S.Circle_logo>
                            </S.Container_explain>

                            <S.Circles>
                                <S.Circles_tag>
                                    {info.Tags}
                                </S.Circles_tag>
                            </S.Circles>
                        </Link></S.Container_all>
                    :info["Tags"].includes(category) ?
                        <S.Container_all key={info.id} ><Link to={view_url}>
                            <S.Container_img>
                                <img src={imgurl + info.background} alt="사진"/>
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
                                    <img src={imgurl + info.logo} alt="사진"/>
                                </S.Circle_logo>
                            </S.Container_explain>

                            <S.Circles>
                                <S.Circles_tag>
                                    {info.Tags}
                                </S.Circles_tag>
                            </S.Circles>
                        </Link></S.Container_all>
                    :category ==="ETC" && (info.Tags === "정보보안" || info.Tags === "게임" || info.Tags === "인공지능") ?
                        <S.Container_all key={info.id} ><Link to={view_url}>
                            <S.Container_img>
                                <img src={imgurl + info.background} alt="사진"/>
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
                                    <img src={imgurl + info.logo} alt="사진"/>
                                </S.Circle_logo>
                            </S.Container_explain>

                            <S.Circles>
                                <S.Circles_tag>
                                    {info.Tags}
                                </S.Circles_tag>
                            </S.Circles>
                        </Link></S.Container_all>

                    :null
                )
            })
        }   
        </>
    )
}

export default Containerlist;