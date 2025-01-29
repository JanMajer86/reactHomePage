import styled from "styled-components";
import tactical from "./../images/tacticalcomputerterminal.jpg";

const Wrapper = styled.div`
	.home {
		display: flex;
		justify-content: space-around;
	}
	.card {
		width: 35rem;
		height: 40rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: 1.2rem;
		border: 4px solid var(--color-primary);
	}
	.card--main {
		border: 4px solid var(--color-secondary);
	}
	.subheading {
		/* color: var(--color-grey-dark-2); */
	}

	.card--header {
		padding: 5rem 2rem;
		color: var(--color-primary-dark-2);
		height: 60%;
		font-weight: 600;
		background: linear-gradient(
				to bottom,
				rgb(var(--color-second), 0.7),
				rgb(var(--color-second), 0.4)
			),
			url(${tactical}) no-repeat center;
		background-size: cover;
		border-bottom: 4px solid var(--color-secondary);
	}
	.card--header span {
		background-color: var(--color-secondary-dark-2);
		line-height: 1.35;
	}
	.card--info {
		padding: 2rem 3.2rem;
		background-color: var(--color-primary-dark-2);
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.card--button-container {
		text-align: center;
	}
`;

export default Wrapper;
