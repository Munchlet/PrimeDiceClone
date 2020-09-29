import React from "react";
import styled from "styled-components";
import CoinIcon from "../../assets/coin.svg";

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	border-radius: 20px;
	margin: 0 8px;
`;

const InputLabel = styled.span`
	display: block;
	color: rgb(155, 159, 174);
	font-size: 0.775rem;
	font-weight: 600;
	letter-spacing: 0px;
	margin-bottom: 4px;
`;

const CustomInputContainer = styled.div`
	flex: 4;
	display: flex;
	height: 43px;
	align-items: center;
	background-color: #ecedf0;
	border-radius: 4px;
`;
const CustomInput = styled.input`
	font-size: 1rem;
	font-weight: 600;
	width: 100%;
	border: none;
	margin: auto 2px auto;
	outline: none;
	flex: 4;
	text-align: center;
	height: 90%;
	border: none;
	border-radius: 4px;
`;

const IconButton = styled.div`
	background-image: url(${CoinIcon});
	background-size: contain;
	background-repeat: no-repeat;
	height: 100%;
	fill: black;
	flex: 1;
`;

const TextButton = styled.div`
	text-align: center;
	flex: 1;
	background-color: #ECEDF0;
	border-radius: 4px;
	height: 100%;
	line-height: 2.5rem;
	font-weight: 600;
	color: #6a6e82;
	font-size: 0.9rem;
	letter-spacing: -1px;
	cursor: pointer;
	&:hover {
		background-color: #DFE0E5;
	}
`;

export default function InputWithImage(props: InputWithImageProps) {
	return (
		<Container>
			<InputLabel>{props.title}</InputLabel>
			<CustomInputContainer>
				<CustomInput type="number" value="0.00" />
				<IconButton />
				{props.subtexts && props.subtexts.map((val) => <TextButton>{val}</TextButton>)}
			</CustomInputContainer>
		</Container>
	);
}

type InputWithImageProps = {
	title: String;
	subtexts?: Array<String>;
};
