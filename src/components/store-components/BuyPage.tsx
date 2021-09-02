import styled from 'styled-components';


/* function BuyPage(props: any) {
	return (
		<div>{props.match.params.id}</div>

	);
}
 */
const BuyPage = (props: any) => {
	console.log('??????????????',typeof props);
	return (
		<div>{props.match.params.id}</div>

	);

}

export default BuyPage;