import styled from "styled-components";

const Wrapper = styled.div`
	.navbar {
		margin-bottom: 2rem;
		min-height: 4rem;
	}

	.navbar--divider {
		width: 100%;
		height: 3px;
		background: linear-gradient(
			to right,
			rgba(var(--color-prim), 0) 20%,
			rgba(var(--color-prim), 0.6)
		);
	}

	.navbar--container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navbar > div:first-of-type {
		display: flex;
		align-items: center;
	}

	.links-container {
		width: max-content;
	}

	.nav-link {
		margin: 0 4rem;
	}

	.nav-link--special {
		padding: 0.2rem 1rem;
		margin: 0 4rem;
		color: #ffffaa;
		font-weight: 600;
		background-color: #aaaa39;
		border: 2px solid #808015;
		border-radius: 0.6rem;
	}

	.nav-link--special:hover {
		color: #d4d46a;
		background-color: #808015;
	}
`;

export default Wrapper;
