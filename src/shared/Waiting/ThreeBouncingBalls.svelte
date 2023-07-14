<div class="balls-container">
	<div class="ball" />
	<div class="ball" />
	<div class="ball" />
</div>

<style>
	.balls-container {
		position: relative;
	}

	@keyframes bounce {
		0%,
		100% {
			bottom: 0;
		}
		50% {
			bottom: 6px; /* Adjust the bounce height */
		}
	}

	.ball {
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: grey;
		animation: bounce 0.8s infinite;
	}

	/* Adjust the position of each ball */
	.ball:nth-child(1) {
		left: 0;
		animation-delay: 0s;
	}

	.ball:nth-child(2) {
		left: 14px;
		animation-delay: 0.1s;
	}

	.ball:nth-child(3) {
		left: 28px;
		animation-delay: 0.2s;
	}
</style>
