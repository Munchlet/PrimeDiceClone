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
	const [rollOver, setRollOver] = useState(49.99);
	const [winChance, setWinChance] = useState(50.0);
	const [payout, setPayout] = useState(49.99);

	const setSliderChange = (val: number) => {
		setRollOver(val - 0.01);
		setWinChance(100 - val);
	};

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
							<InputWithImage title="Roll Over" value={rollOver} />
							<InputWithImage title="Payout" value={payout} />
							<InputWithImage title="Win Chance" value={winChance} />
						</FormRow>
					</FormContainer>
				</SlotBoard>
				<LiveStats />
			</SubContainer>
			<RollSlider onSliderChange={(val: number) => setSliderChange(val)} />
		</Container>
	);
}
