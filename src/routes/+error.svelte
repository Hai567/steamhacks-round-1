<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	onMount(() => {
		console.log($page);
	});
</script>

<div class="error-container">
	<div>
		<h1>{$page.status} {$page.error.message}</h1>
		<h3>
			Bro, seems like you are so lost now. Return to <a href="/">Home Page</a> now before drying out
		</h3>
	</div>
	<img src="/imgs/404/404-gif.gif" alt="" />
</div>

<style>
	.error-container {
		position: relative;
		padding-top: 96px;
		display: grid;
		width: 80%;
		margin: auto;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
		height: calc(100vh - 5em);
	}
	h1 {
		text-align: center;
	}
	img {
		width: 100%;
	}
	@media all and (max-width: 1000px) {
		.error-container {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
