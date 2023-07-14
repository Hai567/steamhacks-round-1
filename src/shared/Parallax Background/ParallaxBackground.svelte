<script>
	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />
<div class="parallax-container">
	<img
		src="/imgs/parallax-background/hill1.png"
		style="padding-top: {scroll}px;"
		alt=""
		class="hill1"
	/>
	<img src="/imgs/parallax-background/hill2.png" alt="" class="hill2" />
	<img src="/imgs/parallax-background/hill3.png" alt="" class="hill3" />
	<img src="/imgs/parallax-background/hill4.png" style="left: {-scroll}px;" alt="" class="hill4" />
	<img src="/imgs/parallax-background/hill5.png" alt="" class="hill5" />
	<img
		src="/imgs/parallax-background/leaf.png"
		style="padding-left: {scroll}px;"
		alt=""
		class="leaf"
	/>
	<img src="/imgs/parallax-background/plant.png" alt="" class="plant" />
	<img src="/imgs/parallax-background/tree.png" alt="" class="tree" />
</div>

<style>
	.hill2 {
		top: -30px !important;
	}
	.hill1 {
		top: -40px !important;
	}
	.parallax-container {
		box-sizing: border-box;
		top: 0;
		position: relative;
		height: 100vh;
		overflow: hidden !important;
		overflow-x: hidden !important;
		overflow-y: hidden !important;
		justify-content: center;
	}
	.parallax-container img {
		width: 100%;
		position: absolute;
		top: 0%;
		left: 0;
		transition: all 0.3s cubic-bezier(0.21, 1.29, 0.85, 1.06);
		-webkit-user-drag: none;
		user-select: none;
		height: 100vh;
		object-fit: cover;
	}
</style>
