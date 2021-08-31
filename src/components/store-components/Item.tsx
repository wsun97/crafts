import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { JsxEmit } from 'typescript';
import item1 from '../../assets/img/item1.jpg'; // test용 이미지. 추후에는 Store로부터 받을거임

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 15rem;
`;

const ImgContainer = styled.div`
	width: 100%;
	heigth : auto;
`;

const Img = styled.img`

	&:hover {
		// box-shadow: 20px 20px 10px #b4b4b4;
		opacity: 0.5;
	}
	max-width:100%;
	max-height:100%;
`;

const Title = styled.div`
	width: 100%;
	font-size: 1.5rem;
	font-family: Times, "Times New Roman", Georgia, serif;
	text-align : center;
	margin-bottom: 1rem;
`;

const Buynow = styled.div`
	font-size: 0.7rem;
	font-style: italic;
	color: #b4b4b4;
	text-align : center;	
	text-decoration: underline;
`;


type ItemProps = {
	name: string;
	url: string;
}

// Link로 구매페이지 넘어갈 때, route로 키 넣어서 전달

const Item = ({name, url} : ItemProps) => {
	return(
		<Link to="/">
		<ItemContainer>
			<ImgContainer>
				<ImgContainer><Img src={url} alt=""/></ImgContainer>
			</ImgContainer>
			<Title>{name}</Title>
			<Buynow>Buy Now!</Buynow>
		</ItemContainer>
		</Link>
		
	);
}

export default Item;