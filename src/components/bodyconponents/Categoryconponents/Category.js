import React from 'react';
import * as S from '../../../styled/mainForm/CategoryStyle';

const Category = ({setCategory}) => {


    return (
        <>
            <S.Category>
                <S.Category_icon_left onClick={()=>setCategory("all")}>
                    <S.Categroy_image>
                        <img src={require("./allicon.png")}/>
                    </S.Categroy_image>
                    전체
                </S.Category_icon_left>
            
                <S.Category_icon onClick={()=>setCategory("웹")}>
                    <S.Categroy_image>
                        <img src={require("./webicon.png")}/>
                    </S.Categroy_image>
                    웹
                </S.Category_icon>

                <S.Category_icon onClick={()=>setCategory("앱")}>
                    <S.Categroy_image>
                        <img src={require("./appicon.png")}/>
                    </S.Categroy_image>
                    앱
                </S.Category_icon>

                <S.Category_icon onClick={()=>setCategory("임베디드")}>
                    <S.Categroy_image>
                        <img src={require("./embeddedicon.png")}/>
                    </S.Categroy_image>
                    임베디드
                </S.Category_icon>
                
                <S.Category_icon onClick={()=>setCategory("ETC")}>
                    <S.Categroy_image>
                        <img src={require("./guitaricon.png")}/>
                    </S.Categroy_image>
                    기타
                </S.Category_icon>
            </S.Category>
        </>    
    )
}

export default Category;