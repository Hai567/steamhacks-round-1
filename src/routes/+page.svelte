<script>
	import SplashIntro from '../shared/Splash Intro/SplashIntro.svelte';
	let chosenLang = 'vi';
</script>

<svelte:head>
	<title>Home •  Dashboard</title>
</svelte:head>

<SplashIntro />
<main class="dash-board-container">
	<div class="smaller-container glass-effect">
		<div class="top-section">
			<h1>Dashboard</h1>
			<select name="lang" id="" bind:value={chosenLang}>
				<option class="lang-option-en" value="en">EN</option>
				<option class="lang-option-vi" value="vi">VI</option>
			</select>
		</div>
		<hr />
		{#if chosenLang === 'en'}
			<div class="info">
				<h4>Introducing this project for SteamHacks</h4>
				<p>
					To open the menu, click on the 2 horizontal lines circle on the top right of the screen
				</p>
				<p>In the <a href="/app">Chatbots</a>, i created 3 bots that you can give it a try</p>
				<ul style="margin-left: 20px;">
					<li>The "AI Chatbot" is a normal one, not so intelligent</li>
					<li>ChatGPT, exactly what it is</li>
					<li>
						Simsimi, this one is the legend Simsimi, stupid and swear a lot, sometime it says
						something that even me can not understand
					</li>
					<li>
						To use Simsimi, go to <a href="https://cors-anywhere.herokuapp.com/"
							>https://cors-anywhere.herokuapp.com/</a
						> and request for temporary use
					</li>
					<li>Background Removal is still in process</li>
				</ul>
				<h4>There are other pages that you can goofing around</h4>
				<ul style="margin-left: 20px;">
					<li>
						<p>
							<a href="/logo-maker">Vinamilk Logo Maker</a> this is where you can create this very popular
							logo based on Vinamilk's
						</p>
					</li>
					<li>
						<p>
							<a href="/portfolio">Portfolio</a> this is where you can find more information about
							me, what I learnt, what I have done, there are lots of <strong>animation</strong>
							there so make sure to
							<strong><a href="/portfolio">check it out</a></strong>
						</p>
					</li>
				</ul>
			</div>
		{:else if chosenLang === 'vi'}
			<div class="info">
				<h4>Giới thiệu dự án tham gia SteamHacks</h4>
				<p>Để mở menu, nhấn vào nút có hình 2 thanh ngang trên đầu bên phải</p>
				<p>Phần <a href="/app">Chatbots</a> mình đã tạo 3 con bots để lựa chọn</p>
				<ul style="margin-left: 20px;">
					<li>"AI Chatbot" là một con bot bình thường, không thông minh lắm :))))</li>
					<li>ChatGPT, đúng vậy, ChatGPT</li>
					<li>Simsimi, con bot huyền thoại. Dùng vui thôi chứ con này ngu vch.</li>
					<li>
						Để dùng Simsimi, ấn vào <a href="https://cors-anywhere.herokuapp.com/"
							>https://cors-anywhere.herokuapp.com/</a
						> rồi chọn "request for temporary use" rồi mới dùng được nhé (trong trường hợp tải về dùng
						local)
					</li>
					<li>Background Removal vẫn đang trong giai đoạn hoàn thiện.</li>
				</ul>
				<h4>Còn nhiều trang khác mọi người có để xem nhé!</h4>
				<ul style="margin-left: 20px;">
					<li>
						<p>
							<a href="/logo-maker">Vinamilk Logo Maker</a> dùng để tạo logo phong cách Vinamilk đang
							hot :D
						</p>
					</li>
					<li>
						<p>
							<a href="/portfolio">Portfolio</a> vào đây để xem thêm thông tin của mình nhé, trong
							này có <strong> rất nhiều animations </strong>, chiếm tới 70% thời gian làm của mình.
							Thế nên nhớ vào nhé!!!!
							<strong><a href="/portfolio">Nhớ đấyyyyyyyy!!!!!!</a></strong>
						</p>
					</li>
				</ul>
				<p>
					<strong>P/S: </strong>Trang này chủ yếu bằng tiếng anh nhé, mãi mình mới nhớ để dịch:))))
				</p>
			</div>
		{/if}
	</div>
</main>

<style>
	.top-section {
		display: flex;
		justify-content: space-between;
	}
	li {
		list-style: disc;
	}
	h4 {
		font-weight: 600;
	}
	hr {
		margin: 1em;
	}
	a {
		text-decoration: underline;
		color: blue;
	}
	.dash-board-container {
		min-height: 100vh;
		background-image: url('/imgs/fancy-background2.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.smaller-container {
		width: 60%;
		padding: 4em;
		margin: 96px auto;
		position: relative;
	}
	@media all and (max-width: 1000px) {
		.smaller-container {
			width: 90%;
			padding: 2.5em;
		}
	}
	.glass-effect {
		border-radius: 16px;
	}
</style>
