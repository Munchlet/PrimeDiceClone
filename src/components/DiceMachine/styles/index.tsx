import styled from "styled-components";
import { SelectedTabProps } from "../../../typings";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100vh;
`;

export const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2.6rem 4rem;
	justify-content: center;
	flex-wrap: wrap;
	width: 92%;
	margin: 0 auto;
`;

export const SlotBoard = styled.div`
	flex: 2 0 450px;
	background-color: white;
	border-radius: 0.5rem;
	height: 353px;
	max-width: 730px;
`;

export const SlotBoardTabContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 48px;
`;

export const SlotBoardTab = styled.div<SelectedTabProps>`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => (props.selected ? "white" : "#ECEDF0")};
	font-size: 0.75rem;
	font-weight: 600;
	color: ${(props) => (props.selected ? "rgb(102, 107, 125)" : "rgb(132, 136, 155)")};
	cursor: ${(props) => (props.selected ? "default" : "pointer")};
	border-top-right-radius: ${(props) => (props.side === "right" ? "0.5rem" : "0rem")};
	border-top-left-radius: ${(props) => (props.side === "left" ? "0.5rem" : "0rem")};
`;

SlotBoardTab.defaultProps = {
	selected: false,
	side: "left",
};

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 1rem;
`;

export const FormRowOne = styled.div`
	display: flex;
`;