import React, { useState } from 'react'
import * as S from '../styled/mainForm/ContainerStyle'
import Carousel from './bodyconponents/Carousel'
import Category from './bodyconponents/Categoryconponents/Category'
import Container from './bodyconponents/Container'
import Recommend from './bodyconponents/Recommend'



const Body = () => {

const [ category, setCategory ] = useState("all");


    return (
        <>
            <S.Body>
                <Carousel/>
            
                {/* 추천 동아리 */}
                <Recommend/>

                <Category setCategory={setCategory}/>
                <S.Container_box>
                    <S.Container_subbox>
                            <Container category={category}/>
                    </S.Container_subbox>
                </S.Container_box>
            </S.Body>
        </>
    )
}

export default Body;