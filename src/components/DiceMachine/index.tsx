import React from "react";
import { SlotBoardTab, SlotBoardTabContainer, SlotBoard, Container } from "./styles";
import LiveStats from "../LiveStats";

export default function DiceMachine() {
	return (
		<Container>
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
		</Container>
	);
}
