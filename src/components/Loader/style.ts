import styled from "styled-components";

export const StyledLoader = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;

	.spinner {
		--red: #d62d20;
		--blue: #0057e7;
		--green: #008744;
		--yellow: #ffa700;
		position: relative;
		width: 60px;
	}

	.spinner:before {
		content: "";
		display: block;
		padding-top: 100%;
	}

	.circular {
		animation: rotate73451 2s linear infinite;
		height: 100%;
		transform-origin: center center;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	.path {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
		animation: dash0175 1.5s ease-in-out infinite, color7123 6s ease-in-out infinite;
		stroke-linecap: round;
	}

	@keyframes rotate73451 {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes dash0175 {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}

		50% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -35px;
		}

		100% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -124px;
		}
	}

	@keyframes color7123 {
		100%,
		0% {
			stroke: var(--red);
		}

		40% {
			stroke: var(--blue);
		}

		66% {
			stroke: var(--green);
		}

		80%,
		90% {
			stroke: var(--yellow);
		}
	}
`;
