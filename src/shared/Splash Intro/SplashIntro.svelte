<script>
	import { onMount } from 'svelte';
	import { SplashIntroHandler } from './SplashIntroHandler';
	onMount(() => {
		SplashIntroHandler();
	});
</script>

<main class="intro-container">
	<div class="">
		<div class="intro-text-container">
			<span class="intro-text">Daniel</span><span class="intro-text">Ho.</span>
		</div>
	</div>
</main>

<style>
	.intro-container {
		min-height: 100vh;
		position: fixed;
		z-index: 1000000;
		left: 0;
		top: 0;
		background-color: #161616;
		color: white;
		width: 100%;
		transition: 1s;
		user-select: none;
		-webkit-user-drag: none;
	}
	.intro-text-container {
		position: absolute;
		top: 47%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: 'Poppins';
		font-weight: 900;
		font-size: 3em;
	}
	.intro-text {
		display: inline-block;
		display: inline-block;
		position: relative;
		bottom: -50px;
		opacity: 0;
		transition: ease-in-out 0.5s;
	}
</style>
