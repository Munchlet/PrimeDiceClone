import React from "react";
import { SlotBoardTab, SlotBoardTabContainer, SlotBoard, SubContainer, Container } from "./styles";
import LiveStats from "../LiveStats";
import RollSlider from "../RollSlider";

export default function DiceMachine() {
	return (
		<Container>
				<SubContainer>
					<SlotBoard>
						<SlotBoardTabContainer>
							<SlotBoardTab selected>
								<span>Manual</span>
							</SlotBoardTab>
							<SlotBoardTab>
								<span>Auto</span>
							</SlotBoardTab>
						</SlotBoardTabContainer>
					</SlotBoard>
					<LiveStats />
				</SubContainer>
				<RollSlider  />
		</Container>
	);
}
