<script>
	let buttonDisplay = false;
	let y;
	let scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<svelte:window bind:scrollY={y} />
{#if y > 10}
	<button class:none-display={buttonDisplay} class="scroll-to-top-btn" on:click={scrollToTop}>
		<i class="fa-solid fa-arrow-up" />
	</button>
{/if}

<style>
	.none-display {
		display: none;
	}
	.scroll-to-top-btn {
		position: fixed;
		bottom: 2em;
		right: 2em;
		padding: 0.5em 0.8em;
		background-color: white;
		border-radius: 100%;
		transition: all 0.5s ease;
	}
	.scroll-to-top-btn i {
		font-size: 1.4em;
	}
</style>
