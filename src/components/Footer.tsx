import React from 'react';
import styled from "styled-components";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";

const FooterContainer = styled.div`
	display: flex;
	flex-direction: row;
	width : 100%;

	border-top: 0.05rem solid;
	border-color: #b4b4b4;
`;

const Copyright = styled.div`
	width:66%;
	margin-top: 1rem;

	font-family: Times, "Times New Roman", Georgia, serif;
	font-size: 0.9rem;
	color: #969696;
`;

const IconContainer = styled.div`
	margin-top: 1rem;
	width: 33%;
	right:0;
	text-align: right;

`;

const Img = styled.img`
	margin-left: 1rem;	
`;

const Footer = () => {
	return(
		<FooterContainer>
			<Copyright>© 2021 by Jun Hee Eun. Proudly created with Cho Wonseon</Copyright>
			<IconContainer>
				<Img src={instagram} alt=""/>
				<Img src={facebook} alt=""/>
			</IconContainer>
		</FooterContainer>
	);
}

export default Footer;