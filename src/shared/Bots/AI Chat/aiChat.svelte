<script>
	import { RPD_API_KEY } from '../../../stores/api';
	import { DarkMode } from 'flowbite-svelte';
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
	import ThreeBouncingBalls from '../Waiting/ThreeBouncingBalls.svelte';
	let isWaiting = false;
	let userInput = '';
	$: messages = [];
	let handleSendApi = async (message) => {
		isWaiting = true;
		messages.push({ name: 'bot', message: '' });
		let getRes = async () => {
			// AI Chatbot Based on Chat GPT
			let url = `https://ai-chatbot.p.rapidapi.com/chat/free?uid=user1&message=${message}`;
			let headers = new Headers();
			headers.set('X-RapidAPI-Key', $RPD_API_KEY);
			headers.set('X-RapidAPI-Host', 'ai-chatbot.p.rapidapi.com');
			let raw = await fetch(url, { headers });
			let res = await raw.json();
			if (raw.ok) {
				messages[messages.length - 1].message = res.chatbot.response;
			} else {
				messages[messages.length - 1].message = 'Error occurred, please contact developer.';
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

<div
	class="container relative shadow-2xl bg-white dark:text-slate-200 light:text-black dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-3/4"
>
	<div class="top-section-of-chat flex justify-between">
		<h1 class="text-3xl font-bold underline dark:text-white">AI ChatBot</h1>
		<DarkMode {btnClass} style="width: 2em" />
	</div>
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
	<div class="form-container bg-white dark:bg-gray-800">
		<form
			on:submit|preventDefault={sendingMsgHandler}
			class="flex p-1 border-2 rounded w-full"
			method="post"
		>
			<input class="grow text-black border-0" type="text" bind:value={userInput} />
			<button style="padding: .2em 1em;" class="hover:text-slate-400"
				><i class="fa-solid fa-paper-plane text-xl" /></button
			>
		</form>
	</div>
</div>

<style>
	input:focus-visible {
		outline: none;
		padding: 0 10px;
	}
	.chat-section::-webkit-scrollbar {
		display: none;
	}
	.chat-section {
		height: 75vh;
		overflow: hidden;
		overflow-y: scroll;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
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

	@keyframes bouncing-balls {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}
	.container {
		margin: 90px auto 2em auto;
		width: 80%;
		padding: 1em 2em;
		height: 80vh;
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
		bottom: 1em;
		left: 0;
		width: 96%;
		margin: 0 2%;
	}
	p {
		margin: 0;
	}
	@media all and (max-width: 780px) {
		.container {
			width: 95%;
		}
	}
</style>
