import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styled from "styled-components";

const NavContainer = styled.div`
	height: 60px;
	background: linear-gradient(rgb(88, 104, 178), rgb(86, 102, 175));
	box-shadow: rgba(25, 25, 25, 0.5) 0px 0px 5px;
	flex: 0 0 60px;
	box-shadow: rgba(25, 25, 25, 0.5) 0px 0px 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 3vw;
`;

export default function NavBar() {
	return (
		<NavContainer>
			<Logo style={{ fill: "white" }} />
			<div>Coin</div>
			<div>Name</div>
		</NavContainer>
	);
}
