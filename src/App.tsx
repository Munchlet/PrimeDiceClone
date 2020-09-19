import React from "react";
import { NavBar, DiceMachine } from "./components";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #405098;
`;
function App() {
	return (
		<Container>
			<NavBar />
			<DiceMachine />
		</Container>
	);
}

export default App;
