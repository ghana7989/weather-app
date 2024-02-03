import styled from 'styled-components'

export const CardContent = styled.div<{
	leftbgimage: string
}>`
	display: flex;
	flex-direction: row;
	min-width: 50rem;
	overflow-x: scroll;

	max-width: 90%;
	.left {
		flex: 2;
		display: flex;
		flex-direction: column;
		background-image: url(${(props) => props.leftbgimage});
		min-width: 300px;
		min-height: 300px;
		background-size: cover;
		background-repeat: no-repeat;
		object-fit: cover;
		.top {
			padding: 0 10px;
			background-color: rgba(255, 255, 255, 0.5);
		}
		.bottom {
			padding: 0 10px;
			margin-top: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: rgba(255, 255, 255, 0.8);
			.location {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			gap: 10px;
			.temp {
				font-size: 3rem;
				font-weight: 300;
			}
			.info {
				font-size: 1rem;
				font-weight: 400;
			}
		}
	}
	.middle {
		padding: 10px;
		max-width: 90%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
	}
	.right {
		flex: 1;
		min-width: 150px;
		display: flex;
		padding: 20px;
		display: flex;
		flex-direction: column;
		.search {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
			gap: 10px;
			button {
				flex-shrink: 2;
				align-self: center;
			}
		}
		.popular {
			display: flex;
			flex-direction: column;
			gap: 10px;
			margin-top: 20px;
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
				li {
					padding: 10px;
					background-color: #f2f2f2;
					border-radius: 5px;
					cursor: pointer;
					transition: 0.15s;
					&:hover {
						background-color: #e6e6e6;
					}
					margin: 4px 0;
					cursor: pointer;
				}
			}
		}
	}
	@media (max-width: 600px) {
		flex-direction: column;
		min-width: 100%;
		max-width: 90%;
	}
`
