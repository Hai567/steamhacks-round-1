<script>
	import HamburgerRounded from '../Sidenav Hamburger/HamburgerRounded.svelte';
	import Menu from '../Menu/Menu.svelte';
	let hamburgerOpened;
	let menuOpened = false;
	let openMenuHandler = (e) => {
		menuOpened = e.detail;
	};
	let changeStateHandler = () => {
		menuOpened = !menuOpened;
		openMenuHandler;
	};
	// reset (turn off) menu when navigate to other page or outclick
	import { afterNavigate } from '$app/navigation'; //
	afterNavigate(() => {
		hamburgerOpened = false; //
		menuOpened = false; //
	}); //
	let handleOutClick = () => {
		hamburgerOpened = false; //
		menuOpened = false; //
	}; //
</script>

<div class="nav-bar-container glass-effect">
	<a href="/">
		<div class="logo">
			<h1>DanielHo.</h1>
		</div>
	</a>
	<HamburgerRounded {menuOpened} on:click={changeStateHandler} />
	{#if menuOpened}
		<Menu display={true} on:click={handleOutClick} />
	{/if}
</div>

<style>
	.nav-bar-container {
		position: fixed;
		display: flex;
		justify-content: space-between;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
		align-items: center;
		padding: 1em 5%;
	}
	.logo {
		width: 10em;
	}
	.logo img {
		width: 100%;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>
