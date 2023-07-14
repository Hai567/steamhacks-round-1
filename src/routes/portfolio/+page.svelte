<script>
	import SplashIntro from '../../shared/Splash Intro/SplashIntro.svelte';
	import ParallaxBackground from '../../shared/Parallax Background/ParallaxBackground.svelte';
	import ScrollToTopButton from '../../shared/ScrollToTopButton/ScrollToTopButton.svelte';
</script>

<main class="main-container">
	<SplashIntro />
	<ParallaxBackground />
	<div class="contents-container">
		<div class="self-intro">
			<h1>Hi</h1>
			<hr style="border: none; height: 3px; background-color: white; margin: 1em 0;" />
			<p>This is Ho Duc Hai, AKA Daniel Ho.</p>
			<p>
				I am an IT enthusiast, I love everything relating to computers and machines, from coding to
				mechanic. Currently, I am learning for web development as a fullstack. In the future I would
				love to have some experience with machine learning and deep learning.
			</p>

			<h4>These are technologies I have learned, implemented in projects and my thought on them</h4>
			<ul class="self-thoughts">
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/html5.png" alt="html5" />
							</div>
						</a>
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/css3.png" alt="css3" />
							</div>
						</a>
					</div>
					HTML5 & CSS3: Nothing to say, the basics :)
				</li>
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/js.png" alt="js" />
							</div>
						</a>
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/jQuery.png" alt="jQuery" />
							</div>
						</a>
					</div>
					JavaScript & JQuery: Great, I do not use JQuery a lot, mainly vanilla JavaScript
				</li>
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/bootstrap.png" alt="bootstrap" />
							</div>
						</a>
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/tailwind.png" alt="tailwind" />
							</div>
						</a>
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/flowbite.png" alt="flowbite" />
							</div>
						</a>
					</div>
					Bootstrap & Tailwind & FLowbite: These guys help me a lot with the UI&UX. Without them, I do
					not even know what to say :)))
				</li>
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/nodeJS.png" alt="nodeJS" />
							</div>
						</a>
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/expressJS.png" alt="expressJS" />
							</div>
						</a>
					</div>
					NodeJS & Express: The best yet! Large thump up
				</li>
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/ejs.png" alt="ejs" />
							</div>
						</a>
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/svelte.png" alt="svelte" />
							</div>
						</a>
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/reactJS.png" alt="reactJS" />
							</div>
						</a>
					</div>
					EJS & Svelte & React: These guys I used the most, the syntax are ez (not the React one).
				</li>
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a href="">
							<div class="technology-logo mongoDB-logo">
								<img src="/imgs/technology-logo/mongoDB.png" alt="mongoDB" />
							</div>
						</a>
					</div>
					MongoDB: Great!! No comment :)))
				</li>
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/python.png" alt="python" />
							</div>
						</a>
					</div>
					Python: Hopefully I will use Python more when learn about Machine Learning and Deep Learning.
				</li>
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/flask.png" alt="flask" />
							</div>
						</a>
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/django.png" alt="django" />
							</div>
						</a>
					</div>
					Flask & DJango: I know but do not use so much, only used them for few projects.
				</li>
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/arduino.png" alt="arduino" />
							</div>
						</a>
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/c.png" alt="c" />
							</div>
						</a>
					</div>
					Arduino & C: Thanks to Arduino, I learned a bit of C :)
				</li>
				<hr class="line-separate-thought" />
				<li class="self-thought">
					<div class="logo-container">
						<a target="_blank" href="">
							<div class="technology-logo">
								<img src="/imgs/technology-logo/linux.png" alt="linux" />
							</div>
						</a>
					</div>
					Linux: I think I know the basics :)))
				</li>
				<hr class="line-separate-thought" />
			</ul>
			<p>
				In the futute, I want to learn about web3 and crypto and things alike. I want to try machine
				learning and deep learning too. I did a bit of training an AI but it is a bit stupid.
				Besides this, I love doing sport and exercises too. For example: Basketball, Football,
				Swimming, etc Call me old school but I love listening to "Borelo" or "Nhac vang"
			</p>
		</div>
	</div>
	<ScrollToTopButton />
</main>

<style>
	.line-separate-thought {
		width: 88%;
		margin: 1em 0 1em auto;
		background-color: rgb(226 232 240);
		border: none;
		height: 1px;
	}
	.logo-container {
		width: 10em;
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
	}
	.self-thought {
		display: flex;
		gap: 2em;
		align-items: center;
		width: 100%;
		padding-left: 1.5em;
	}
	.self-intro {
		width: 80%;
		margin: auto;
		padding: 2em 0;
	}
	.mongoDB-logo {
		background-color: #fff;
	}
	.technology-logo {
		width: 3em;
		height: 3em;
		display: inline-block;
		position: relative;
	}
	.technology-logo img {
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	.contents-container {
		background-color: #003329;
		color: white;
		position: relative;
	}
	h1 {
		margin: 0;
	}
	.contents-container::before {
		content: '';
		height: 10em;
		width: 100%;
		position: absolute;
		opacity: 0.25;
		top: -5em;
		background-image: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			#0000007e 45%,
			#0000007e 55%,
			rgba(255, 255, 255, 0) 100%
		);
	}
	.contents-container::after {
		content: '';
		height: 6em;
		width: 100%;
		position: absolute;
		opacity: 0.3;
		bottom: -3em;
		background-image: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			black 50%,
			rgba(255, 255, 255, 0) 100%
		);
	}
</style>
