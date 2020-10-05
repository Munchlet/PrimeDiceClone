import React, { useState } from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";
import SliderThumb from "../../assets/slider.svg";
import useSound from "use-sound";
const SliderSound = require("../../assets/slider.ogg");

const StyledSlider = styled(ReactSlider)`
	margin: auto;
	width: 92%;
	height: 25px;
`;

const StyledThumb = styled.div`
	height: 36px;
	width: 36px;
	background-color: #ffffff;
	background-image: url(${SliderThumb});
	background-size: 50px 20px;
	background-position: center;
	background-repeat: no-repeat;
	cursor: grab;
	border-radius: 0.2rem;
	top: -5px;
`;

const Thumb = (props: any, state: any) => <StyledThumb {...props}></StyledThumb>;

const StyledTrack = styled.div`
	top: 10px;
	bottom: 0;
	background: ${(props: any) => (props.index === 1 ? "#00E449" : "#F10260")};
	border-radius: 100px;
	height: 8px;
`;

const Track = (props: any, state: any) => <StyledTrack {...props} index={state.index} />;

const Container = styled.div`
	width: 60%;
	margin: 0 auto;
	height: 50px;
	background-color: #4b5893;
	border-radius: 100px;
	display: flex;
	padding: 0 20px;
	flex-direction: row;
	align-items: center;
`;

const SliderValue = styled.span`
	color: rgba(255, 255, 255, 0.6);
	font-size: 12px;
`;

export default function RollSlider(props: Props) {
	const [play] = useSound(SliderSound);
	const [value, setValue] = useState(49.99);

	return (
		<Container>
			<SliderValue>0</SliderValue>
			<StyledSlider
				min={2}
				max={98}
				defaultValue={[value]}
				renderTrack={Track}
				renderThumb={Thumb}
				onChange={(v) => {
					play();
					if (typeof v === "number") props.onSliderChange(v - 0.01);
				}}
			/>
			<SliderValue>100</SliderValue>
		</Container>
	);
}

type Props = {
	onSliderChange: (val: number) => void;
};
