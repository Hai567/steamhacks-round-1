<script>
	import { DarkMode, Label, Select } from 'flowbite-svelte';
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
	import '../../app.css';
	let botOptions = [
		{ value: 'ai-chatbot', name: 'AI ChatBot' },
		{ value: 'chatgpt', name: 'ChatGPT' },
		{ value: 'background-removal', name: 'Remove Background' },
		{ value: 'simsimi', name: 'Simsimi' }
	];
	let selected = 'ai-chatbot';
	import ModelAiChatBot from '../Bots/AI Chat/ModelAIChatBot.svelte';
	import ChatGpt from '../Bots/ChatGPT/ChatGPT.svelte';
	import BackgroundRemoval from '../Bots/Background Removal/BackgroundRemoval.svelte';
	import SimsimiChatModel from '../Bots/AI Chat/SimsimiChatModel.svelte';
</script>

<div
	class="container relative shadow-2xl bg-white dark:text-slate-200 light:text-black dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-3/4"
>
	<div class="top-section-of-chat flex justify-between">
		<Label
			><h5 class="text-l text-center font-bold dark:text-white">Choose A Bot</h5>
			<Select class="dark:text-black select-bot" items={botOptions} bind:value={selected} />
		</Label>
		<DarkMode {btnClass} style="width: 2em" />
	</div>
	<div>
		{#if selected === 'ai-chatbot'}
			<ModelAiChatBot />
		{:else if selected === 'chatgpt'}
			<ChatGpt />
		{:else if selected === 'background-removal'}
			<BackgroundRemoval />
		{:else if selected === 'simsimi'}
			<SimsimiChatModel />
		{/if}
	</div>
</div>

<style>
	.select-bot:focus,
	.select-bot:focus-visible {
		outline: none !important;
		border-color: inherit !important;
		-webkit-box-shadow: none !important;
		box-shadow: none !important;
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
	@media all and (max-width: 780px) {
		.container {
			width: 95%;
		}
	}
</style>
