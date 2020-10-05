import React, { useState } from "react";
import {
	SlotBoardTab,
	SlotBoardTabContainer,
	SlotBoard,
	SubContainer,
	Container,
	FormContainer,
	FormRow,
} from "./styles";
import LiveStats from "../LiveStats";
import RollSlider from "../RollSlider";
import InputWithImage from "../InputWithImage";

export default function DiceMachine() {
	const [sliderValue, setSliderValue] = useState(49.99);

	return (
		<Container>
			<SubContainer>
				<SlotBoard>
					<SlotBoardTabContainer>
						<SlotBoardTab selected side="left">
							<span>Manual</span>
						</SlotBoardTab>
						<SlotBoardTab side="right">
							<span>Auto</span>
						</SlotBoardTab>
					</SlotBoardTabContainer>
					<FormContainer>
						<FormRow>
							<InputWithImage title="Bet Amount" subtexts={[`½`, `2×`]} />
							<InputWithImage title="Profit on Win" />
						</FormRow>
						<FormRow>
							<InputWithImage title="Roll Over" value={sliderValue} />
							<InputWithImage title="Payout" />
							<InputWithImage title="Win Chance" />
						</FormRow>
					</FormContainer>
				</SlotBoard>
				<LiveStats />
			</SubContainer>
			<RollSlider onSliderChange={(val: number) => setSliderValue(val)} />
		</Container>
	);
}
