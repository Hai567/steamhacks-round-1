<!-- This one returns the processed chat -->
<script>
	import ThreeBouncingBalls from '../../Waiting/ThreeBouncingBalls.svelte';
	let isWaiting = false;
	let userInput = '';
	$: messages = [];
	let handleSendApi = async (message, chosenLang) => {
		isWaiting = true;
		messages.push({ name: 'bot', message: '' });
		let getRes = async () => {
			console.log(chosenLang);
			// Simsimi
			let url = 'https://cors-anywhere.herokuapp.com/https://api.simsimi.vn/v2/simtalk';
			let headers = new Headers();
			headers.set('Content-Type', 'application/x-www-form-urlencoded');
			let body = new URLSearchParams({
				text: message,
				lc: 'en'
			});
			let method = 'POST';
			let raw = await fetch(url, { method, headers, body });
			let res = await raw.json();
			console.log(raw);
			if (raw.ok) {
				messages[messages.length - 1].message = res.message;
			} else {
				messages[messages.length - 1].message = 'Out of request';
			}
			//
			isWaiting = false;
		};
		getRes();
	};
	let sendingMsgHandler = async (e) => {
		messages = [...messages, { name: 'user', message: userInput }];
		handleSendApi(userInput);
		userInput = '';
	};
</script>

<div>
	<div class="chat-section relative">
		{#each messages as message, i}
			{#if message.name === 'user'}
				<div class="message-block user-message">
					<p
						class="message-text text-lg bg-indigo-500 text-white dark:text-slate-200 rounded-l-lg rounded-tr-lg"
					>
						{message.message}
					</p>
					<span class="text-xs flex justify-end">you</span>
				</div>
			{:else if message.name === 'bot'}
				{#if isWaiting && i === messages.length - 1}
					<div class="message-block bot-message waiting message-text">
						<ThreeBouncingBalls />
					</div>
				{:else}
					<div class="message-block bot-message">
						<p
							class="message-text text-lg bg-slate-500 text-white dark:text-slate-200 rounded-r-lg rounded-tl-lg"
						>
							{message.message}
						</p>
						<span class="text-xs flex justify-start">bot</span>
					</div>
				{/if}
			{/if}
		{/each}
	</div>
	<div class="form-container rounded-b bg-white dark:bg-gray-800">
		<form
			on:submit|preventDefault={sendingMsgHandler}
			class="flex p-1 border-2 rounded w-full"
			method="post"
		>
			<!-- <select class="dark:text-black rounded-l" name="lang" id="">
				<option value="vn">VIE</option>
				<option value="en" selected>ENG</option>
			</select> -->
			<input
				class="grow text-black border-0"
				type="text"
				bind:value={userInput}
				required
				disabled={isWaiting}
			/>
			<button
				disabled={isWaiting}
				style="padding: .2em 1em; "
				class="hover:text-slate-400 rounded-r border-l-2 border-slate-200"
			>
				<i class="fa-solid fa-paper-plane text-xl" />
			</button>
		</form>
	</div>
</div>

<style>
	/* select {
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		background-image: none;
		width: 64px;
		padding: 0 10px;
		border: none;
		border-right: 2px solid rgb(226 232 240);
		font-weight: 1em;
	} */
	input:focus,
	input:focus-visible {
		outline: none;
		border-color: inherit;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
	.message-text {
		padding: 0.5em 1em;
	}
	.message-block {
		max-width: 80%;
		display: grid;
		margin: 1em;
		width: 100%;
	}
	.ball-animation {
		display: inline-block;
		animation: bouncing-balls 2s ease-in-out infinite;
		animation-delay: 0.5s;
		background-color: #000;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-right: 5px;
	}

	.bot-message {
		width: 100%;
		justify-content: left;
	}
	.user-message {
		float: right;
		justify-content: right;
	}
	.form-container {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 1em 2%;
	}
	p {
		margin: 0;
	}
	.chat-section::-webkit-scrollbar {
		display: none;
	}
	.chat-section {
		height: 63vh;
		overflow: hidden;
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
