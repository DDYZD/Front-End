import styled from 'styled-components';

export const Club = styled.div`
    height: 600px;
    width: 100%;
    background-color: #000000;
`;

export const ClubBackground = styled.div`
    height: 381px;
    width: 100%;  
    background: linear-gradient(white 5%, black);
    img {
    height: 381px;
    width: 1000px;
    position: relative;
    left: 460px;
    overflow: hidden;
}
`;

export const ClubLogo = styled.div`
    width: 125px;
    height: 125px;
    img{
        width: 125px;
        overflow: hidden;
        border: solid black 6px;
        border-radius: 100%;
        position: relative;
        left: 895px;
        top: -115px;
    }
`;

export const ClubName = styled.div`
    position: relative;
    width: 1000px;
    top: 67px;
    left: 460px;
    color: white;
    font-size: 36px;
    text-align: center;
`;

export const Tags = styled.div`
    width: 100%;
`;

export const TagsBox = styled.div`
    width: 1000px;
    position: relative;
    left: 460px;
    text-align: center;
`;

export const Tag = styled.div`
    color: white;
    background-color: #000000;
`;

export const Line = styled.div`
    width: 1000px;
    height: 5px;
    background-color: #7F82D9;
    position: relative;
    left: 460px;
    top: 20px;
`;

export const Content = styled.div`
    width: 100%;
    height: 1700px;
    background-color: #000000;
`;

export const Rectangle = styled.div`
    width: 940px; 
    height: 1500px;
    border-radius: 20px;
    background-color: white;
    position: relative;
    left: 460px;
    top: 20px;
    margin-top: 20px;
    padding: 30px;
`;

export const Application = styled.div`
    width: 210px;
    height: 140px;
    display: fixed;
`;

export const DDAY = styled.div`
    font-size: 25px;
`;

/*
.extra-icon {
    width: 30px;
    height: 30px;
    position: relative;
    left: 898px;
    top: -60px;
    float: left;
    margin: 0px 19px;
}
.explain {
    height: 1000px;
}
*/