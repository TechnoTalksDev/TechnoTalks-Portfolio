<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const x = tweened(0, {
		duration: 1500,
		easing: cubicOut
	});

  const y = tweened(0, {
		duration: 1500,
		easing: cubicOut
	});

  const blob = document.getElementById("blob")

  document.body.onpointermove = event => {
    const {clientX, clientY} = event;

    x.set(clientX-250)
    y.set(clientY-250)
  }

	
</script>

<main>
  <div id="blob" style="left: {$x}px; top: {$y}px;">
  </div>
  <div class="card glass">
    <h1>Hi!</h1>
    <h2>technotalks.net is under some construction 🚧<br>This portfolio is being redisigned at the moment. Come back some other time!</h2>
  </div>

  <p>
    Check out the <a href="https://github.com/TechnoTalksDev/TechnoTalks-Portfolio" target="_blank">repository</a>, for updates!
  </p>
</main>
