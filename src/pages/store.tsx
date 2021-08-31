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

const NoItem = styled.div`
	font-family: Times, "Times New Roman", Georgia, serif;
	font-size: 0.9rem;
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
	font-size: 1.3rem;

`;

const Pagenation = styled.div<{disabled: boolean}>`
	margin: 0 1.3rem 4rem 1.3rem;
	color: ${(props) => props.disabled ? "grey" : "black" };
	&:hover {
		color: ${(props) => props.disabled ? null : "#b4b4b4"};
	}
	cursor: ${(props) => props.disabled ? null : "pointer"};
`;

const Store: React.FC = () => {

	const ITEMS_PER_PAGE: number = 4;

	const [items, setItems] = useState<Array<any>>(() => {
		return  [ // 나중에 back에서 받아올것
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
	});
	const [numOfPages, setNumOfPages] = useState<number>(1);
	const [numOfLeftItems, setNumOfLeftItems] = useState<number>(0);
	const [currentPageNum, setCurrentPageNum] = useState<number>(1);
	const [showItems, setShowItems] = useState<Array<any>>([]);

	useEffect(() => {
		// 의문, set등의 상태 관리 함수의 경우 if문 아래에 쓰는 것이
		// 리액트를 혼동하게 만들 수 있다고 하는데(조건에 set하고 안하고 패턴이 바껴서 버그 생길 수 있다고..)
		// 해당 useEffect의 경우 마운트, 언마운트 시에만 실행되는데 아래처럼 쓰면 안될까?
		if(items.length) {
			setNumOfPages(Math.ceil(items.length / ITEMS_PER_PAGE));
			setNumOfLeftItems(items.length % ITEMS_PER_PAGE);
			setShowItems(items.slice(0, ITEMS_PER_PAGE + 1));
		}

	}, []);

	useEffect(() => {
		setShowItems(() => {
			let start = (currentPageNum - 1) * ITEMS_PER_PAGE;
			let end = currentPageNum  * ITEMS_PER_PAGE;

			return items.slice(start, end);
		})


	}, [currentPageNum, /**/items, numOfLeftItems]);

	const clickNext = (): void => {
		console.log('cickNext', currentPageNum);
		if(currentPageNum >= numOfPages) {
			return;
		}
		
		setCurrentPageNum(currentPageNum + 1);		
	};

	const clickBack = (): void => {
		console.log('clickBack', currentPageNum);
		if(currentPageNum === 1) {
			return;
		}
		setCurrentPageNum(currentPageNum - 1);
	}

    return(
			<Fragment>
				<FullContainer>
					<Navigation></Navigation>
				<StoreContainer>
					{!items.length ? 
						<NoItem>No items can buy in store.</NoItem> 
						:
					<Fragment>
						<ItemsContainer>
							{showItems.map((row) => {
								return <Item name={row.name} url={row.url}></Item>
							})}
						</ItemsContainer>
						<PagenationContainer>
							<Pagenation disabled={currentPageNum === 1} onClick={clickBack}>{'<'}</Pagenation>
							<Pagenation disabled={currentPageNum === numOfPages} onClick={clickNext}>{'>'}</Pagenation>
						</PagenationContainer>
					</Fragment> }
					<Footer></Footer>
				</StoreContainer>
				<UserNavigation></UserNavigation>
			</FullContainer> 
			</Fragment>
			   
		) 
}

export default Store;