import React from "react";
import {
	SlotBoardTab,
	SlotBoardTabContainer,
	SlotBoard,
	SubContainer,
	Container,
	FormContainer,
	FormRowOne,
} from "./styles";
import LiveStats from "../LiveStats";
import RollSlider from "../RollSlider";
import InputWithImage from "../InputWithImage";

export default function DiceMachine() {
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
						<FormRowOne>
							<InputWithImage title="Bet Amount"  />
							<InputWithImage title="Profit on Win"  />
						</FormRowOne>
					</FormContainer>
				</SlotBoard>
				<LiveStats />
			</SubContainer>
			<RollSlider />
		</Container>
	);
}
