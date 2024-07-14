<script lang="ts">
	import Follow from '$lib/components/follow.svelte'
	import { onMount } from 'svelte';
	import { ArrowDown, Link } from 'lucide-svelte';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();
			
	let currentSub = 0
	let subs = ["Student", "Developer", "Entrepreneur", "Engineer"]

	let sub = ""

	/**
	 * @param {number | undefined} ms
	 */
	function sleep(ms: number | undefined) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function typeSub() {
		for (const char of subs[currentSub]) {
			await sleep(250);
			//console.log(char)
			sub += char
		}

		await sleep(3000);
		
		for (let i=sub.length-1; i >= 0; i--) {
			await sleep(250);
			sub = sub.slice(0, -1)
			//console.log(sub)
		}

		if (currentSub < subs.length - 1) {
			currentSub +=1
		}
		else {
			currentSub = 0
		}

		typeSub()
	}

	const longWhile = 30000;

	const comingSoon: ToastSettings = {
		message: "<strong>Hey! <span class='wave text-2xl'>👋</span></strong> <br/>Look's like you ❤️ my work! <br/> This site's still under construction... 🚧 <br/> <strong>Check back later</strong> for more cool stuff!",
		background: 'variant-glass-primary',
		timeout: 60000,
	};

  onMount(() => {
		typeSub()

		const timer = setTimeout(() => {
      //console.log("User has been on site for: "+longWhile+ " s");
			toastStore.trigger(comingSoon)
    }, longWhile);

		return () => clearTimeout(timer)
  });

	const mailList: ToastSettings = {
		message: '📧 Coming soon...',
		background: 'variant-glass-tertiary',
		hideDismiss: true,
		timeout: 3000,
	};

	function handleMailList() {
		toastStore.trigger(mailList)
	}


	const skills = [
		{
			name: "SvelteKit",
			img: "/svelte.png",
			skill: 4.4
		},
		{
			name: "TypeScript",
			img: "/typescript.png",
			skill: 3.8
		},
		{
			name: "MongoDB",
			img: "/mongo.png",
			skill: 2.8
		},
		{
			name: "Python",
			img: "/python.png",
			skill: 3.6
		},
		{
			name: "C++",
			img: "/cplusplus.png",
			skill: 2.6
		},
		{
			name: "Kotlin",
			img: "/kotlin.png",
			skill: 2.5
		},
		{
			name: "Azure",
			img: "/azure.png",
			skill: 3.6
		},
		{
			name: "Docker",
			img: "/docker.png",
			skill: 4.2
		}
	]

	const projects = [
		{
			name: "Reko",
			img: "/reko-banner.png",
			description: "Discord bot to monitor Minecraft servers",
			link: "",
			github: "https://github.com/TechnoTalksDev/Reko",
			tags: ["Discord", "API", "Minecraft", "Server"]
		},
		{
			name: "HotDash",
			img: "/hot-dash.png",
			description: "Display host temperatures and load",
			link: "",
			github: "https://github.com/TechnoTalksDev/HotDash",
			tags: ["Server", "Docker"]
		},
		{
			name: "10A VEX",
			img: "/10A.png",
			description: "VEX Robotics programming",
			link: "",
			github: "https://github.com/Exo10A",
			tags: ["VEX", ["c++"]]
		},
		{
			name: "Retrospective",
			img: "https://fastrepair.biz/wp-content/uploads/2018/10/iStock-984996502-3.jpg",
			description: "Built by students for students",
			link: "",
			github: "",
			tags: ["startup"]
		},
		{
			name: "Simeo",
			img: "/simeo_full.png",
			description: "GPA and Grades for Synergy students",
			link: "https://www.simeo.app/",
			github: "https://github.com/TechnoTalksDev/Simeo",
			tags: ["FBLA", "full-stack"]
		},
		{
			name: "Rider-MC",
			img: "/rider-banner.png",
			description: "Ride any Minecraft mob!",
			link: "https://www.spigotmc.org/resources/rider-simple-easy-ride-anything-1-8x-1-17x.93807/",
			github: "https://github.com/TechnoTalksDev/Rider-MC",
			tags: ["Minecraft", "Plugin", "Java"]
		},
		{
			name: "CraftableSaddlesMC",
			img: "/saddle-banner.png",
			description: "With a variety of permissions!",
			link: "https://www.spigotmc.org/resources/craftablesaddles-simple-easy-1-8x-1-17x.93871/",
			github: "https://github.com/TechnoTalksDev/CraftableSaddlesMC",
			tags: ["Minecraft", "Plugin", "Java"]
		}

	]

	const featuredProject= {name: "Simeo", description: "A GPA and Grade solution for Synergy students", tags: ["FBLA", "full-stack"], link: "https://www.simeo.app/", github: "https://github.com/TechnoTalksDev/Simeo", img: "/simeo_full.png"}
</script>

<Follow/>

<div id="l-blob" class="z-[-3] absolute w-[20rem] h-[17rem] rounded-[50%] bg-gradient-to-br from-error-500 via-tertiary-500 to-secondary-500 opacity-40 top-[-5rem] left-[-10rem] overflow-x-hidden" style="animation-name: spin; animation-duration: 30s;">
</div>

<div id="r-blob" class="z-[-3] absolute w-[20rem] h-[17rem] rounded-[50%] bg-gradient-to-br from-warning-500 via-tertiary-500 to-secondary-500 opacity-40 top-[-5rem] right-[-10rem] overflow-x-hidden" style="animation-name: spin; animation-duration: 30s;">
</div>

<div id="m-blob" class="absolute top-[-6rem] left-0 right-0 ml-auto mr-auto w-[10rem] h-[8rem] rounded-[50%] bg-gradient-to-br from-surface-500 via-primary-500 to-white opacity-40 overflow-x-hidden" style="animation-name: spin; animation-duration: 30s;">
</div>

<!--
<div id="b-blob" class="absolute bottom-[-6rem] left-0 right-0 ml-auto mr-auto w-[10rem] h-[8rem] rounded-[50%] bg-gradient-to-br from-surface-500 via-primary-500 to-white opacity-40 overflow-x-hidden" style="animation-name: spin; animation-duration: 30s;">
</div>
-->


<div class="h-[100vh] w-[100vw] backdrop-blur-3xl overflow-x-hidden scroll-smooth">

	<div id="hero" class="container h-[100vh] mx-auto flex flex-col justify-center items-center z-[1] overflow-x-hidden">
		
		<div class="space-y-10 h-full text-center flex flex-col items-center justify-center">
			
			<div>

				<h2 class="h1 text-7xl glow">Chandan C.</h2>
				<div class="flex flex-row justify-center items-center mt-3">
					<h2 class="text-2xl gradient-heading">{sub}</h2>
					<div class="cursor my-1"></div>
				</div>

				<!--<hr class="mt-6 !border-t-4 rounded-xl"/>-->
				<div class="mt-6 h-[4px] bg-white rounded-3xl gradient-bar animate-gradient"></div>
			
			</div>




		</div>

		<div class="flex-end">
			<div class="flex justify-center items-center w-[50px] h-[50px] rounded-full variant-soft-primary animate-bounce">
				<a href="#about"><ArrowDown size="30" strokeWidth=2.5/></a>
			</div>
			<div id="b-blob" class="absolute bottom-[0rem] left-0 right-0 ml-auto mr-auto w-[5rem] h-[5rem] rounded-[50%] bg-gradient-to-br from-surface-500 via-primary-500 to-white opacity-40 overflow-x-hidden -z-10 blur-3xl">
			</div>
		</div>

	</div>

	<div id="about" class="container h-[100vh] mx-auto flex justify-center items-center z-[1] overflow-x-hidden">
		<div class="space-y-10 text-center flex flex-col items-center">
			
			<div>
				<!--<h2 class="h1 text-7xl glow">About</h2>-->
				<div class="card variant-glass-surface flex flex-col p-8 w-[25rem] max-w-[98vw]">
					<div class="flex flex-col justify-between text-left">
						<h2 class="h2">Hey I'm 👋<br/><span class="h1 text-6xl gradient-heading animate-gradient">Chandan</span></h2>
						
						<div class="flex flex-row fill-white justify-between items-center mt-4">
							
							<a href="https://discord.gg/8vNHAA36fR" target="_blank">
								<svg class="w-[2rem] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg>
							</a>

							<a href="https://github.com/TechnoTalksDev" target="_blank">
								<svg class="w-[2rem] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
							</a>

							<a href="https://www.linkedin.com/in/murali-sri-chandan-chengalvala-a31501288/" target="_blank">
								<svg class="w-[2rem] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
							</a>	

						</div>

					</div>
					<div class="inline my-8 h-[4px] rounded-xl gradient-bar animate-gradient"/>
					<div class="text-left">
						<p class="h5 font-medium">
							A <strong>high school student</strong> from Washington with a passion for coding. A full-stack web developer with experience in a multitude of technologies spanning from robotics to API development. 
						</p>
					</div>
				</div>

				<div class="card variant-glass-surface py-2 w-[25rem] max-w-[98vw] mt-2">
					<div class="scroll-container">
						<div class="scroll-content">
							{#each skills.concat(skills) as skill, index}
								<div class="flex-none w-[35px] mx-6">
									<a href="/"><img src="{skill.img}" alt="{skill.name + " logo"}" class="opacity-[65%]"/></a>
								</div>
							{/each}
						</div>
					</div>

				</div>
			

			</div>
		</div>
	</div>

	<!--Projects-->
	<div id="projects" class="h-[100vh] mx-auto flex justify-center items-center z-[1] overflow-x-hidden">
		<div class="space-y-10 text-center flex flex-col items-center">
			<!--Featured-->
			<div class="w-[98vw] max-w-[100%]">
				<div class="card variant-glass h-[60vh]">
					<div class="h-[85%] project-hero bg-cover rounded-lg" style="background-image: url('{featuredProject.img}'); background-position: center center;">
					</div>

					<div class="text-left h-[20%] ml-4 -mt-9 relative">
						<div class="flex flex-row items-center">
							<h2 class="h2">{featuredProject.name}</h2>
	
							<a href="{featuredProject.link}" target="_blank"><Link class="mx-2 w-[2rem]" /></a>
							<a href="{featuredProject.github}" target="_blank"><svg class="w-[1.5rem] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>

						</div>

						{#each featuredProject.tags as tag}
							<span class="badge variant-soft-primary mr-1">#{tag}</span>
						{/each}
						
						<p class="opacity-[65%] h5">{featuredProject.description}</p>
					</div>
				</div>

			</div>
			<!--Caurosel-->
			<div class="w-[100vw] mt-2">
				<div class="scroll-container">
					<div class="scroll-content">
						{#each projects.concat(projects) as project, index}
							<div class="card variant-glass w-[17rem] h-[13rem] mx-2">
								<div class="h-[75%] project-hero bg-cover rounded-lg" style="background-image: url('{project.img}'); background-position: center center;">

								</div>
								<div class="text-left h-[20%] ml-2 -mt-9 relative">
									<div class="flex flex-row items-center">
										<h3 class="h3">{project.name}</h3>
										<a href="{project.link}" target="_blank"><Link class="mx-2 w-[1.5rem]" /></a>
										<a href="{project.github}" target="_blank"><svg class="w-[1.5rem] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
									</div>

									{#each project.tags as tag}
										<span class="badge variant-soft-primary mr-1">#{tag}</span>
									{/each}

									<p class="opacity-[65%]">{project.description}</p>
								</div>

							</div>
						{/each}
					</div>
				</div>

			</div>
			
		</div>
	</div>

	<div id="contact" class="container h-[100vh] mx-auto flex justify-center items-center z-[1] overflow-x-hidden">
		<div class="space-y-10 text-center flex flex-col items-center">
			
			<div>
				<h3 class="h3 text-7xl glow">Stay in touch</h3>
				<h3 class="h3 opacity-[65%] mb-2">Let me know when cool projects go live</h3>
				<form class="flex flex-row" on:submit={handleMailList}>
					<input class="input variant-glass mr-1" placeholder="Enter your email"/>
					<button type="submit" class="btn variant-glass-primary ml-1">Join</button>
				</form>
				
			</div>
		
		</div>
	</div>

</div>



<style lang="postcss">

.glow {
	text-shadow: 5px 0px 20px rgba(255, 255, 255, 0.26);
}

.cursor {
    @apply bg-primary-500;
		@apply rounded opacity-70;
    width: 0.25rem;
    height: 1.5rem;

    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% {
        background-color: transparent;
    }
    50% {
				@apply bg-primary-500;
    }
}

.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 6s ease infinite alternate;
  -moz-animation: animatedgradient 6s ease infinite alternate;
  animation: animatedgradient 6s ease infinite alternate;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.scroll-container {
  display: flex;
	
  overflow: hidden;
  white-space: nowrap;

  --mask: linear-gradient(to right, 
    rgba(0,0,0, 0) 0%, 
    rgba(0,0,0, 1) 10%, 
    rgba(0,0,0, 1) 90%, 
    rgba(0,0,0, 0) 100%
  ) 0% 0% / 100% 100% repeat-x;

	-webkit-mask: var(--mask); 
  mask: var(--mask);
}

.scroll-content {
  display: flex;
	align-items: center;
  animation: scroll 20s linear infinite;
}

.project-hero {
  --mask: linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

	-webkit-mask: var(--mask); 
  mask: var(--mask);
}

@keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); } /* Reset for the next cycle */
    100% { transform: rotate(0deg); }
  }

:global(.wave) {
	display: inline-block;
	animation: wave 1.5s infinite;
	transform-origin: 70% 70%;
}

</style>
