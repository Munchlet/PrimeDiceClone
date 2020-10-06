import React, { useState } from "react";
import {
	SlotBoardTab,
	SlotBoardTabContainer,
	SlotBoard,
	SubContainer,
	Container,
	FormContainer,
	FormRow,
	FormRowContainer,
} from "./styles";
import LiveStats from "../LiveStats";
import RollSlider from "../RollSlider";
import InputWithImage from "../InputWithImage";
import { SettingsStore } from "../../utils/Store";

export default function DiceMachine() {
	const { rollOver, winChance, payout, isRollOver, setRollAndWin } = SettingsStore();
	const setSliderChange = (val: number) => {
		if (isRollOver) return setRollAndWin(val - 0.01, parseFloat((99 / (99.99 - val - 0.01)).toFixed(4)), 100 - val);
		return setRollAndWin(val - 0.01, parseFloat((99 / (val - 0.01)).toFixed(4)), 100 - val);
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
						<FormRowContainer>
							<InputWithImage title="Roll Over" value={rollOver} />
							<InputWithImage title="Payout" value={payout} />
							<InputWithImage title="Win Chance" value={winChance} />
						</FormRowContainer>
					</FormContainer>
				</SlotBoard>
				<LiveStats />
			</SubContainer>
			<RollSlider onSliderChange={(val: number) => setSliderChange(val)} defaultValue={49.99} />
		</Container>
	);
}
