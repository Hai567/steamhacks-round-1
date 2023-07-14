<script>
	export let display = 'none';
	let backgroundMove = 0;
</script>

<div class="menu-container" style="display: {display};">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="menu-background-patterns-container" style="--move: {backgroundMove}%" on:click />
	<div class="menu-items-container">
		<a on:mousemove={() => (backgroundMove = 0)} href="/" class="menu-item">Home</a>
		<a on:mousemove={() => (backgroundMove = 20)} href="/portfolio" class="menu-item">Portfolio</a>
		<a on:mousemove={() => (backgroundMove = 40)} href="/app" class="menu-item">ChatBots</a>
		<a on:mousemove={() => (backgroundMove = 60)} href="vnm-logo-maker" class="menu-item"
			>Vinamilk's Style Logo Maker</a
		>
	</div>
</div>

<style>
	.menu-container {
		position: fixed;
		top: -10px;
		left: -10px;
		width: 105vw;
		height: 105vh;
		background-color: #181a18a8;
		display: flex;
		align-items: center;
		font-family: 'ubuntu mono';
	}
	/* .menu-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: #181a18a8;
		display: flex;
		align-items: center;
		font-family: 'ubuntu mono';
	} */
	.menu-items-container {
		margin-left: 10%;
		z-index: 10;
	}
	.menu-item {
		display: block;
		font-size: clamp(1.4em, 4vw, 8em);
		text-decoration: none;
		color: white;
		transition: all 0.3s cubic-bezier(0.15, 0.44, 0.79, 0.84);
	}
	.menu-items-container:hover .menu-item {
		opacity: 0.3;
	}
	.menu-items-container:hover .menu-item:hover {
		opacity: 1;
	}
	.menu-background-patterns-container {
		z-index: -1;
		position: absolute;
		top: 0;
		left: 0%;
		width: 100%;
		height: 100%;
		background-image: -webkit-radial-gradient(rgba(2255, 255, 255, 0.1) 9%, transparent 15%);
		/* background-image: url('/imgs/logo.png'); */
		background-position: 0% 0%;
		background-size: 8vmin 8vmin;
		transition: all 0.6s ease;
	}
	.menu-background-patterns-container:has(~ .menu-items-container:hover) {
		background-size: 9vmin 9vmin;
		background-position: 0 var(--move);
	}
</style>
