<script>
	export let menuOpened;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="hamburger-rounded-button-container" class:menuOpened on:click>
	<div class="hamburger-line" />
</div>

<style>
	.hamburger-rounded-button-container {
		width: 50px;
		height: 50px;
		border: 1px solid black;
		border-radius: 50%;
		position: relative;
		cursor: pointer;
		z-index: 5;
	}
	.hamburger-line {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.hamburger-line::before,
	.hamburger-line::after {
		display: block;
		content: '';
		width: 30px;
		height: 5px;
		background-color: black;
		border-radius: 5px;
		margin: 6px 0;
		transition: all 0.3s cubic-bezier(0.18, 0.89, 0.31, 1.25);
	}
	.hamburger-rounded-button-container.menuOpened .hamburger-line::before {
		/* transform: rotate(45deg) translate(14%, 71%); */
		transform: rotate(45deg) translate(4px, 3px) !important;
	}
	.hamburger-rounded-button-container.menuOpened .hamburger-line::after {
		/* transform: rotate(-45deg) translate(10%, -82%); */
		/* transform: rotate(-45deg) translate(4.5px, -4.5px) !important; */
		transform: rotate(-45deg) translate(4px, -4px) !important;
	}
</style>
