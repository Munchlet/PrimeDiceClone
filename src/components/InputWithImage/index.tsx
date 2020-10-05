import React from "react";
import styled from "styled-components";
import CoinIcon from "../../assets/coin.svg";
import { AttachMoney } from "@styled-icons/material-sharp";

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
	font-family: 'Open Sans';
`;

const IconButton = styled.div`
	height: 100%;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
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

export default function InputWithImage(props: Props) {
	return (
		<Container>
			<InputLabel>{props.title}</InputLabel>
			<CustomInputContainer>
				<CustomInput type="number" value={props.value} />
				<IconButton><AttachMoney size={24} /></IconButton>
				{props.subtexts && props.subtexts.map((val) => <TextButton>{val}</TextButton>)}
			</CustomInputContainer>
		</Container>
	);
}

type Props = {
	title: string;
	subtexts?: Array<string>;
	value?: number;
};

InputWithImage.defaultProps = {
	value: 0
} as Partial<Props>;
