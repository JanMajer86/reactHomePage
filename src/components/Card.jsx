import styled from "styled-components";

const Wrapper = styled.div`
	.card {
		width: 29.6rem;
		min-width: 29.6rem;
		height: 48rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: 1.2rem;
		border: 4px solid var(--color-primary);
	}
	.card--main {
		border: 4px solid var(--color-secondary-dark-2);
	}
	.subheading {
		/* color: var(--color-grey-dark-2); */
	}

	.card--header {
		padding: 2rem;
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
		border-bottom: 4px solid var(--color-secondary-dark-2);
		display: flex;
		flex-direction: column;
		justify-content: end;
		text-align: right;
	}
	.card--header span {
		background-color: var(--color-secondary-dark-2);
		line-height: 1.35;
	}

	.card--header h1 {
		margin-bottom: 2rem;
		font-size: 5.32rem;
	}
	.card--info {
		padding: 2rem 3.2rem;
		background-color: var(--color-primary-dark-3);
		height: 40%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.card--button-container {
		text-align: center;
	}

	.card--secondary-header {
		padding: 2rem;

		height: 40%;
		background-color: var(--color-primary-dark-3);
	}

	.card--secondary-header p:first-of-type {
		margin-bottom: 1.6rem;
	}
	.card--secondary-info {
		padding: 2rem 3.2rem;
		height: 60%;
		border-top: 4px solid var(--color-primary);
		background: linear-gradient(
				to bottom,
				rgb(var(--color-prim-dark), 0.6),
				rgb(var(--color-prim-dark), 0.9)
			),
			url(${terminal}) no-repeat center;
		/* background-size: cover; */
		display: flex;
		flex-direction: column;
		justify-content: end;
	}

	li {
		display: flex;
		margin: 1rem 0;
		align-items: center;
	}

	li svg {
		font-size: 2.6rem;
		margin-right: 1.6rem;
		color: var(--color-primary-light-1);
	}

	li span {
		background-color: var(--color-primary-dark-1);
	}
`;

const Card = () => {
	return (
		<Wrapper>
			<div className="card">
				<div className="card--top">card top</div>
				<div className="card--bottom">card bottom</div>
			</div>
		</Wrapper>
	);
};
export default Card;
