import React from 'react';
import styled from 'styled-components';

const UserNaviContainer = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: felx-start;
	font-size: 1.1rem;
	right:0;

	margin-right: 11%;
	font-family: Times, "Times New Roman", Georgia, serif;
	color: #b4b4b4;

`;

const UserUl = styled.ul`
	margin-top: 5rem;
	list-style: none;
	-webkit-padding-start: 0rem;
`;

const UserLi = styled.li`
	text-align: right;
	margin-bottom: 1rem;
`;

const UserNavigation = () => {
	return(
		<UserNaviContainer>
			<UserUl>
				<UserLi>Cart({1})</UserLi>
				<UserLi>My Page</UserLi>
			</UserUl>
		</UserNaviContainer>

	);
}

export default UserNavigation;