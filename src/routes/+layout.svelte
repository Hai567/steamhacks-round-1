<script>
	import NavBar from '../shared/NavBar/NavBar.svelte';
	import '../app.css';
</script>

<header>
	<NavBar />
</header>
<slot />
<footer class="bg-black">
	<div class="w-90% m-auto text-white text-center">
		<h4>From Duc Hai, Made With Love</h4>
		<h6>Contact me:</h6>
		<div class="contact">
			<a href="https://www.facebook.com/profile.php?id=100050045833243">
				<i class="fa-brands fa-facebook facebook-icon icon" />
			</a>
			<a href="https://github.com/Hai567"><i class="fa-brands fa-github icon" /></a>
			<a href="mailto: daniel567ho@gmail.com"><i class="fa-solid mail-icon fa-envelope icon" /></a>
			<a href=""><i class="fa-brands fa-discord icon" /></a>
		</div>
	</div>
</footer>

<style>
	footer div {
		padding: 2em;
	}
	div h4 {
		padding: 1em 1em 0.5em 1em;
	}
	div.contact {
		display: flex;
		justify-content: center;
		gap: 20px;
		padding: 1em;
	}
	.icon {
		font-size: 2em;
	}
</style>
