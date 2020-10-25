import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Slider from 'react-slick'
import * as S from '../../styled/mainForm/CarouselStyle'


const Carousel = () => {

    const [ img, setImg ] = useState(null);
    const [loading, setLoading] = useState(false);
    const imgurl = "http://10.156.147.146"

    const settings = {
            dots: true,  // 점은 안 보이게
            infinite: true, // 무한으로 즐기게
            speed: 500,
            slidesToShow: 1, //1장씩 보이게 해주세요
            slidesToScroll: 1, //1장씩 넘어가세요
    }

    useEffect(() => {
        setLoading(false);
        const imgs = async () => {
            const response = await axios.get("http://10.156.147.146/ad");
            setImg(response['data']);
        };
        imgs();
        setLoading(true);
    },[])



    
    if(!loading) return(<div>Loading</div>);  
    if(!img) return(<div>이미지 불러오기 실패!!</div>);

    return (
        <S.Wrap>
            <S.Slide>
                <Slider {...settings}> 
                    {
                        img.map((info) => {
                            return(
                                <img src={imgurl + info.adImage}/>
                            )
                        })
                    }
                </Slider>
            </S.Slide>
        </S.Wrap>
    )
}

export default Carousel;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import SlideContent from "./SlideContent";
// import styled from "styled-components";

// const Slide = ({ data, handleRen }) => { //부모 컴포넌트에서 받은 state와 method

//   //settings 부분, 슬라이더의 기능을 조정할 수 있다.
//   const settings = {
//     dots: false,  // 점은 안 보이게
//     infinite: true, // 무한으로 즐기게
//     speed: 500,
//     slidesToShow: 1, //4장씩 보이게 해주세요
//     slidesToScroll: 1, //1장씩 넘어가세요
    
//     responsive: [ // 반응형 웹 구현 옵션
//       {
//           breakpoint: 1200, // 화면 사이즈 1200px
//           settings: {
//             slidesToShow: 1,
//           }
//       },
//       {
//         breakpoint: 1023,
//         settings: {
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };
//   return (
//     <Wrap>
//       <Slider {...settings}> //Slider 태그, 위에서 설정한 슬라이더가 나옴
//         {data.map((data) => {
//           return <SlideContent data={data} handleRen={handleRen} />;
//         })} //Slider 안에 들어가는 내용(콘텐츠)
//       </Slider>
//     </Wrap>
//   );
// };

// export default Slide;