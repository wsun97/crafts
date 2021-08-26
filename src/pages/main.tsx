import React from 'react';
import styled from 'styled-components';
import mainImg from '../assets/img/mainImg.jpg';

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
	background-color : blue;
	display: flex;
	flex-direction: column;	
`;

const MainImg = styled.img`
	width: 50rem;
	height: 65rem;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 2rem;
`;

const Main = () => {  
    return(
        <MainContainer>
					<ImgContainer>
						<MainImg src={mainImg}/>
					</ImgContainer>
					<TitleContainer>
						Jeon Hee Eun, Pottery Artist
					</TitleContainer>
				</MainContainer>
    );
}

export default Main;