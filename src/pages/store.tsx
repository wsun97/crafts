import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserNavigation from '../components/UserNavigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Item from '../components/store-components/Item';
import item1 from "../assets/img/item1.jpg";

import * as _ from 'lodash';


const FullContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: felx-start;
	height: 90rem;
`;

const StoreContainer = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
	width: 50%;
`;

const ItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	margin-top: 20rem;
	margin-bottom: 4rem;

	column-gap: 2rem;
	row-gap: 5rem;

`;

const PagenationContainer = styled.div`
	display: flex;
	font-size: 1rem;
	color: #b4b4b4;
`;

const Pagenation = styled.div`
	margin: 0 1rem 4rem 1rem;
`;

const Store = () => {

	const ITEMS_PER_PAGE: number = 4;
	const [items, setItems] = useState([]);
	const [numOfPages, setNumOfPages] = useState(1);
	const [leftItems, setLeftItems] = useState(0);

	useEffect(() => {
		console.log('mounted');

		setItems([]); // 여기 다시 

	}, [])

	const Items: Array<Object> = [ // 나중에 back에서 받아올것들
		{name : "item1", url: item1},
		{name : "item2", url: item1},
		{name : "item3", url: item1},
		{name : "item4", url: item1},
		{name : "item5", url: item1},
		{name : "item6", url: item1},
		{name : "item7", url: item1},
		{name : "item8", url: item1},
		{name : "item9", url: item1},
		{name : "item10", url: item1},
		{name : "item11", url: item1},
	];

/* 	if(!_.isEmpty(Items)) {
		numOfPages = Math.floor(Items.length / ITEMS_PER_PAGE);
		leftItems = Items.length % ITEMS_PER_PAGE;
	} */



	
    return(
			<Fragment>
				<FullContainer>
				<Navigation></Navigation>
				<StoreContainer>
					<ItemsContainer>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
					</ItemsContainer>
					<PagenationContainer>
						<Pagenation>{'<'}</Pagenation>
						<Pagenation>{'>'}</Pagenation>
					</PagenationContainer>
					<Footer></Footer>
				</StoreContainer>
				<UserNavigation></UserNavigation>
			</FullContainer> 
			</Fragment>
			   
		)  
}

export default Store;