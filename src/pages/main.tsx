import React, { Fragment } from 'react';
import styled from 'styled-components';
import mainImg from '../assets/img/mainImg.jpg';
import Navigation from '../components/Navigation';
import UserNavigation from '../components/UserNavigation';
import Footer from '../components/Footer';

const FullContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: felx-start;
	height: 70rem;
`;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: center;
	width: 50%;
	height : 50rem;
`;

const ImgContainer = styled.div`
	// width: 100%;
	// object-fit: contain

`;

const Img = styled.img`

`;

const TitleContainer = styled.div`	
	font-size: 2rem;
	margin-top: 2rem;
	margin-bottom: 1rem;
	font-family: Times, "Times New Roman", Georgia, serif;
`;

const Main = () => {  
    return(
			<Fragment>
				<FullContainer>
				<Navigation></Navigation>
				<MainContainer>
					<ImgContainer>
						<Img src={mainImg} alt=""/>
					</ImgContainer>
					<TitleContainer>
						Jun Hee Eun, Pottery Artist
					</TitleContainer>
					<Footer></Footer>
				</MainContainer>
				<UserNavigation></UserNavigation>
			</FullContainer>     
			
			</Fragment>
			
    );
}

export default Main;