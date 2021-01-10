import styled from 'styled-components'

export const HeroContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

export const MainSectionContainer = styled.div`
 display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 400px;
    width: 100%;
`;
export const MainSectionContainerTwo = styled.div`
 display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 400px;
    width: 100%;
`;

export const ImageBox = styled.div`
    width: 200px;
    height: 100px;
    overflow: hidden;
    object-fit: cover;
`;

export const FooterBox = styled.div`
    width: 100%;
    height: 100px;
    display:flex;
    justify-content: center;
    align-items: flex-end;
`;

export const TitleBox = styled.h2`
    text-transform: uppercase;
`;
export const TitleBoxTwo = styled.h2`
    text-transform: uppercase;
    text-align: end;
`;

export const SubtitleBox = styled.h4`
    text-transform: uppercase;
`;

export const EmailBox = styled.input`
    width: 200px;
    height: 2rem;
`
export const SubscribeBox = styled.button`
    width: 150px;
    height: 2rem;
`