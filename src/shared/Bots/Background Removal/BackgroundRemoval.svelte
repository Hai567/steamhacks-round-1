<script>
	const authorizedImgExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
	import ThreeBouncingBalls from '../../Waiting/ThreeBouncingBalls.svelte';
	let isWaiting = false;
	let userInput = '';
	$: messages = [];
	let handleSendApi = async (message) => {
		let getRes = async () => {
			isWaiting = false;
		};
		getRes();
	};
	let sendingMsgHandler = async (e) => {
		messages = [...messages, { name: 'user', message: userInput }];
		isWaiting = true;
		messages.push({ name: 'bot', message: '' });
		userInput = '';
	};
	let uploadedFile;
	let base64Data = '';

	function convertToBase64(event) {
		const file = event.target.files[0];

		const reader = new FileReader();
		reader.onloadend = () => {
			base64Data = reader.result;
			console.log(base64Data);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	}
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
		<form on:submit|preventDefault class="flex p-1 border-2 rounded w-full" method="POST">
			<input
				type="file"
				name="user-img"
				id=""
				class="w-full hover:cursor-pointer rounded"
				disabled={isWaiting}
				bind:files={uploadedFile}
				accept={authorizedImgExtensions.join(',')}
				on:change={convertToBase64}
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
	.message-text {
		padding: 0.5em 1em;
	}
	.message-block {
		max-width: 80%;
		display: grid;
		margin: 1em;
		width: 100%;
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
