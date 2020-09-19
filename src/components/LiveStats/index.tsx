import { Refresh, TransitEnterexit } from "@styled-icons/material-sharp";
import { ScreenSize, formatMoney } from "../../utils/Helper";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ColoredAmountProps } from "../../typings";

const LiveStatsContainer = styled.div`
	flex: 1 0 280px;
	max-width: 280px;
	height: 353px;
	margin-left: 42px;
	background-color: #2a3671;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media screen and (max-width: 964px) {
		margin-top: 20px;
	}
`;

const LiveStatsHeader = styled.div`
	background: rgb(12, 22, 61);
	color: rgb(255, 255, 255);
	font-weight: 600;
	display: flex;
	justify-content: space-between;
	align-items: center;
	white-space: nowrap;
	/* height: 48px; */
	padding: 0 8px;
	flex: 0 1 48px;
`;

const LiveStatsBody = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.6rem 0.8rem;
	justify-content: space-evenly;
	flex: 1 0 auto;
`;

const WagerProfitContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
`;

const LiveStatsGrid = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

const LiveStatsGridTitle = styled.span`
	color: rgb(183, 191, 214);
	font-weight: 600;
	font-size: 0.9rem;
`;

const LiveStatsGridText = styled.span<ColoredAmountProps>`
	margin-top: 4px;
	color: rgb(183, 191, 214);
	font-weight: 600;
	font-size: 0.9rem;
	color: ${(props) => (props.amount !== undefined && props.amount >= 0 ? "rgb(0, 228, 73)" : "rgb(237, 3, 96)")};
`;

LiveStatsGridText.defaultProps = {
	amount: 0.0,
};

const LiveStatsGraph = styled.div`
	flex: 1 0 auto;
`;

const WinLossContainer = styled.div`
	display: flex;
	flex: 0 0 2rem;
	flex-direction: row;
`;

const WinLossGrid = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px;
`;
const WinLossValue = styled(LiveStatsGridTitle)<ColoredAmountProps>`
	color: ${(props) => (props.amount !== undefined && props.amount >= 0 ? "rgb(0, 228, 73)" : "rgb(237, 3, 96)")};
`;

WinLossValue.defaultProps = {
	amount: 0.0,
};

const HistoryTickerContainer = styled.div`
	flex: 0 0 2rem;
	display: flex;
	overflow-x: hidden;
	align-items: center;
	margin-top: 6px;
`;

const TickerItem = styled.div<ColoredAmountProps>`
	background: rgb(23, 38, 99);
	height: 28px;
	margin-left: 4px;
	border-radius: 0.8rem;
	color: ${(props) =>
		props.amount !== undefined && Number(props.amount) >= 0 ? "rgb(0, 228, 73)" : "rgb(237, 3, 96)"};
	padding: 0.2rem 0.6rem;
	font-size: 0.7rem;
	text-align: center;
	line-height: 1.2rem;
`;

TickerItem.defaultProps = {
	amount: 0.0,
};

let x = 0;

export default function LiveStats() {
	const [tickers, setTickers] = useState<Array<number>>([]);
	const [graphValues, setGraphValues] = useState<Array<{ x: number; y: number }>>([{ x: 1, y: 2 }]);
	const [winCount, setWinCount] = useState(0);
	const [lossCount, setLossCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const randomNumber = Math.floor(Math.random() * 201) - 100;
			setGraphValues((old) => {
				const t: Array<{ x: number; y: number }> = [...old];
				t.push({
					x,
					y: randomNumber,
				});

				console.log({
					x,
					y: randomNumber,
				});

				x += 1;
				return t;
			});

			setTickers((old) => {
				const t: Array<number> = [...old];
				t.push(randomNumber);
				return t;
			});
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<LiveStatsContainer>
			<LiveStatsHeader>
				<Refresh size={20} />
				<span style={{ fontWeight: 600 }}>Live Stats</span>
				<TransitEnterexit size={20} />
			</LiveStatsHeader>
			<LiveStatsBody>
				<WagerProfitContainer>
					<LiveStatsGrid>
						<LiveStatsGridTitle>Wagered</LiveStatsGridTitle>
						<LiveStatsGridText>$0.00</LiveStatsGridText>
					</LiveStatsGrid>
					<LiveStatsGrid>
						<LiveStatsGridTitle>Profit</LiveStatsGridTitle>
						<LiveStatsGridText amount={0.0}>$0.00</LiveStatsGridText>
					</LiveStatsGrid>
				</WagerProfitContainer>
				<LiveStatsGraph>
					<VictoryLine interpolation="natural" data={graphValues} />
				</LiveStatsGraph>
				<WinLossContainer>
					<WinLossGrid>
						<LiveStatsGridTitle>Wins</LiveStatsGridTitle>
						<WinLossValue amount={winCount}>{winCount}</WinLossValue>
					</WinLossGrid>
					<WinLossGrid>
						<LiveStatsGridTitle>Losses</LiveStatsGridTitle>
						<WinLossValue amount={lossCount}>{lossCount}</WinLossValue>
					</WinLossGrid>
				</WinLossContainer>
				<HistoryTickerContainer>
					{tickers.map((ticker) => (
						<TickerItem key={ticker} amount={ticker}>
							{formatMoney(ticker)}
						</TickerItem>
					))}
				</HistoryTickerContainer>
			</LiveStatsBody>
		</LiveStatsContainer>
	);
}
