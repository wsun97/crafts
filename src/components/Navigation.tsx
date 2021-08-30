import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NaviContainer = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: felx-start;

	left:0;

	margin-left: 3%;
`;

const HomeDiv = styled.div`
	font-family: Times, "Times New Roman", Georgia, serif;
	font-size: 3rem;

	margin-top: 3rem;
`;

const PagesDiv = styled.div`
 	font-family: Times, "Times New Roman", Georgia, serif;
	color: #b4b4b4;
	font-size: 1.1rem;
	margin-top:5rem;
`;

const PagesUl = styled.ul`
	list-style: none;
	-webkit-padding-start: 0rem;
`;

const PagesLi = styled.li`
	margin-bottom: 1rem;
`;

const Navigation = () => {
	return(
		<NaviContainer>
			<HomeDiv><Link to="/">Jun <br/>Hee Eun</Link></HomeDiv>
			<PagesDiv>
				<PagesUl>
					<PagesLi><Link to="/participantes">Participants</Link></PagesLi>
					<PagesLi><Link to="/workProcess">Work Process</Link></PagesLi>
					<PagesLi><Link to="/store">Store</Link></PagesLi>
					<PagesLi><Link to="/contact">Contact Us</Link></PagesLi>
				</PagesUl>
			</PagesDiv>
		</NaviContainer>
	);
}

export default Navigation;