<script>
	import domtoimage from 'dom-to-image';
	let brandName = 'Vinamilk';
	let establishAbbreviation = 'EST';
	let establishedYear = '2023';
	let logoNode;
	let downloadLinkNode;
	let logoType;
	let size = 10;
	$: resultPadding = 3;
	$: lowerInfoSize = 2;
	let changeSize = () => {
		if (size <= 3) {
			resultPadding = 0.9;
			lowerInfoSize = 0.5;
		} else if (size <= 6) {
			resultPadding = 2.9;
			lowerInfoSize = 1;
		} else if (6 < size <= 14) {
			resultPadding = 4.6;
			lowerInfoSize = 2;
		} else if (14 < size) {
			resultPadding = 7;
			lowerInfoSize = 3;
		}
	};
	$: borderRadius = 0;
	let generateLogo = () => {
		domtoimage
			.toPng(logoNode)
			.then(function (dataUrl) {
				var img = new Image();
				img.src = dataUrl;
				downloadLinkNode.href = dataUrl;
				downloadLinkNode.click();
			})
			.catch(function (error) {
				console.error('oops, something went wrong!', error);
			});
	};
</script>

<svelte:head
	><link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="intro">
	<h2>Please put your phone into landscape mode to have the best experience!</h2>
	<img src="/imgs/rotate-phone.gif" alt="" />
</div>
<main class="logo-maker-container border-slate-300 glass-effect">
	<form action="" class="input-form container">
		<div class="input-part">
			<label for="establish-abbreviation">Establish Abbreviation: </label>
			<input
				id="establish-abbreviation"
				bind:value={establishAbbreviation}
				type="text"
				placeholder="Establish Abbreviation"
			/>
		</div>
		<div class="input-part">
			<label for="brand-name">Brand Name: </label>
			<input id="brand-name" bind:value={brandName} type="text" placeholder="Brand Name" />
		</div>
		<div class="input-part">
			<label for="size">Size: </label>
			<select name="" id="size" bind:value={size} on:change={changeSize}>
				{#each { length: 18 } as _, i}
					<option value={i + 1}>{i + 1}</option>
				{/each}
			</select>
		</div>
		<div class="input-part">
			<label for="established-year">Established Year: </label>
			<input
				id="established-year"
				bind:value={establishedYear}
				type="text"
				placeholder="Established Year"
			/>
		</div>
		<div class="input-part">
			<label for="logo-type">Logo Type: </label>
			<select name="logo-type" id="logo-type" bind:value={logoType}>
				<option value="default" selected>Default</option>
				<option value="inverted">Inverted</option>
			</select>
		</div>
		
		{#if logoType === 'inverted'}
			<div class="input-part">
				<label for="border-radius">Rounded Corner Radius: </label>
				<select name="" id="border-radius" bind:value={borderRadius}>
					<option value="0" selected>0</option>
					<option value="15" selected>15</option>
					<option value="25" selected>25</option>
					<option value="35" selected>35</option>
					<option value="45" selected>45</option>
					<option value="55" selected>55</option>
				</select>
			</div>
		{/if}
	</form>
	<div class="result-container">
		<div
			class="result"
			class:inverted-logo={logoType === 'inverted'}
			bind:this={logoNode}
			style="border-radius: {borderRadius}px; padding: {resultPadding * 2.5}em {resultPadding}em;"
		>
			<h1 style="font-size: {size}em;">{brandName}</h1>
			<div class="lower-info" style="font-size: {lowerInfoSize}em;">
				<span class="establishedAbbreviation">{establishAbbreviation}</span>
				<span class="establishedYear">{establishedYear}</span>
			</div>
		</div>
	</div>
	<form class="download-form" action="" on:submit|preventDefault={generateLogo}>
		<a bind:this={downloadLinkNode} href="" class="download-link" download="logo.png"
			><button class="bg-slate-200 rounded">Download</button></a
		>
	</form>
</main>

<style>
	.logo-maker-container {
		width: 90%;
		margin: 120px auto;
		border: 3px solid;
		padding: 3em;
		box-shadow: 13px 13px 26px #bebebe, -13px -13px 26px #ffffff;
		border-radius: 15px;
	}
	.intro {
		width: 100%;
		height: 150vh;
		padding: 3em;
		background-color: black;
		position: fixed;
		z-index: 2;
		top: 0;
		left: 0;
		justify-content: center;
		flex-wrap: wrap;
		transition: all 0.4s ease;
		font-family: 'Roboto';
		-webkit-user-drag: none;
		user-select: none;
		display: flex;
		padding-bottom: 60vh;
	}
	.intro h2 {
		margin-top: 4em;
		color: white;
		text-align: center;
	}
	.intro img {
		width: 310px;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	@media screen and (orientation: portrait) {
		.intro {
			display: flex;
		}
		main.container {
			display: none;
		}
	}
	/* Landscape orientation */
	@media screen and (orientation: landscape) {
		.intro {
			position: absolute;
			top: -150vh;
		}
		main.container {
			display: block;
		}
	}
	.download-form {
		display: flex;
		justify-content: center;
	}
	.download-form button {
		width: 12em;
		height: 4em;
	}
	.input-form {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		justify-content: center;
	}
	.input-part {
		width: 15em;
		text-align: center;
	}
	.input-part label {
		display: block;
	}
	.inverted-logo {
		background-color: #0213b0 !important;
		color: white !important;
	}
	@font-face {
		font-family: 'VNMSansDisplayBold';
		src: url('/fonts/VNMSansDisplay/VNM_Sans_Display_Bold.otf');
	}
	/* @font-face {
		font-family: 'VNMSansDisplayRegular';
		src: url('/fonts/VNMSansDisplay/VNM_Sans_Display_Regular.otf');
	}
	@font-face {
		font-family: 'VNMSansDisplayStandard';
		src: url('/fonts/VNMSansDisplay/VNM_Sans_Display_Std.otf');
	} */
	.container {
		width: 80%;
		margin: auto;
		font-family: 'Roboto';
		transition: all 0.4s ease;
	}
	.result-container {
		margin: 1em;
		display: flex;
		justify-content: center;
		font-family: 'VNMSansDisplayBold' !important;
		user-select: none;
	}
	.result {
		color: #0213b0;
		padding: 5em 3em;
		background-color: white;
	}
	.result h1 {
		margin: 0;
		font-size: 10em;
		line-height: 0.7em;
		font-family: 'VNMSansDisplayBold' !important;
	}
	.result span {
		margin: 0;
		font-size: 2em;
	}
	.lower-info {
		display: flex;
		justify-content: space-between;
	}
</style>
