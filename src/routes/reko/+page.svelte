<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
  import { browser } from '$app/environment';

  //import './reko.css';

	const x = tweened(0, {
		duration: 1500,
		easing: cubicOut
	});

  const y = tweened(0, {
		duration: 1500,
		easing: cubicOut
	});

  if (browser) {
    const blob = document.getElementById("blob")

    document.body.onpointermove = event => {
      const {clientX, clientY} = event;

      x.set(clientX-250)
      y.set(clientY-250)
    }
  }
</script>

<main>
  <div id="blob" style="left: {$x}px; top: {$y}px;"></div>

  <h1 class = "lift">Reko</h1>
  <h3 class = "lift">A simple Minecraft Server Integration bot!</h3>
  <div class="card glass">
    <h2>Hi!</h2>
    <p>Reko's website is under some construction 🚧<br>
      Soon you'll be able to <strong>invite the bot</strong> and <strong>view bot stats</strong> here!
    </p>
  </div>

  <p id="footer">
    Check out the <a href="https://github.com/TechnoTalksDev/TechnoTalks-Portfolio/tree/wip/construction" target="_blank">repository</a>, for updates!
    <a data-sveltekit-preload-data="off" href="/"><div id="techno">TechnoTalks's page</div></a>
  </p>
</main>

<style>
/* Blob background

Colors for Reko

*/

:root {
  font-family: "Rajdhani", sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  
  overflow-x: hidden;
  overflow-y: hidden;
}

main {
  display: flex;
  margin: 0;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  align-items: center;   
  flex-direction: column;
  justify-content: center;
  --accent-color: lightgreen;
  --techno-color: #38b6ff;
}


a {
  font-weight: 500;
  background: -webkit-linear-gradient(#eee, #333);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: inherit;
  transition: font-size 1s
}

a:hover {
  font-size: 105%;
}

/*
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
*/

.card {
  width: 500px;
  height: auto;
  margin: 0.5in auto;
  padding: 1em;
  text-align: left;
  transition: transform 2s;
}

.card:hover {
  transform: scale(1.1);
}

@media only screen and (max-width: 650px) {
  .card {
    width: 80%; 
  }
}

.glass{
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border:1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.lift {
  text-shadow: 1px 1px 3px rgb(204, 204, 204);
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

h2 {
  font-size: 2.5em;
}

h3 {
  font-size: 1.5em;
  line-height: 1.1;
}

p {
  font-size: 1.3em; 
  text-align: left;
}

#footer {
  text-align: center;
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1 1.35;
  }

  to {
    rotate: 360deg;
  }
}

#blob {
  width: 500px;
  height: 500px;
  background-color:white;
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(to right, var(--accent-color), lightblue);
  animation: rotate 20s infinite;
  filter: blur(150px);
  z-index: -1;
}

strong {
  /* Set the background color */
  background: linear-gradient(to right, white 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#techno {
  background: linear-gradient(to right, white 0%, var(--techno-color) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: underline;
}
</style>