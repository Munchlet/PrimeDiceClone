import React from "react";
import styled from "styled-components";
import SliderThumb from "../../assets/slider.svg";

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
	background-image: url(${SliderThumb});
	background-size: 50px 50px;
	background-repeat: no-repeat;
	flex: 1;
`;

const TextButton = styled.div`
	text-align: center;
	flex: 1;
	background-color: #ecedf0;
	border-radius: 4px;
	height: 100%;
	line-height: 42px;
`;

export default function InputWithImage(props: InputWithImageProps) {
	return (
		<Container>
			<InputLabel>{props.title}</InputLabel>
			<CustomInputContainer>
				<CustomInput type="number" value="0.00" />
				<IconButton />
				<TextButton>1/2</TextButton>
				<TextButton>2x</TextButton>
			</CustomInputContainer>
		</Container>
	);
}

type InputWithImageProps = {
	title: String;
};
