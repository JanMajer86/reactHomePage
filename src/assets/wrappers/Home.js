import styled from "styled-components";

const Wrapper = styled.div`
	.home {
		display: flex;
		justify-content: space-around;
	}
	.card {
		width: 35rem;
		height: 40rem;
		padding: 2rem 4rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 1.2rem;
		border: 4px solid var(--color-primary);
	}
	.card--main {
		border: 4px solid var(--color-secondary);
	}
	.subheading {
		color: var(--color-grey-dark-2);
	}
`;

export default Wrapper;
