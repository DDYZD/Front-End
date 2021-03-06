
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrap = styled.div`
    margin: auto;
    width: 1400px;
    height: 533px;
    overflow: hidden;

    background-color: black;
    .slick-prev:before {
    width: 30px;
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: white;
    left: 0;
    }
    .slick-next:before {
    opacity: 1;
    color: white;
    background-color: black;
    }
    .slick-dots{
        color: white;
    }
    .slick-dots:before {
        color: white;
        background-color: white;
    }
    .slick-dots li button:before {
        color: white;
    }
`;

export const Slide = styled.div`
    height: initial;
`;