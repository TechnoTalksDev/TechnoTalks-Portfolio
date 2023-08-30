<script>
  import "./bm.css"
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
  import { browser } from '$app/environment';
  import aboutbg from '$lib/assets/aboutbg.svg'

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
      console.log(clientX, clientY)
      x.set(clientX-250)
      y.set((clientY-250)+window.scrollY)
    }
  }
</script>

<div id="blur"></div>

<div id="blob" style="left: {$x}px; top: {$y}px;"></div>

<div class = "hero">
  
  
  <nav>
    <ul>
      <li><a href="#con">Contact</a></li>
      <li><a href="#proj">Projects</a></li>
      <li><a href="#aboutme">About</a></li>
    </ul>    
  </nav>
  <h1>Hi, I'm TechnoTalks!</h1>

  <h2><strong>Student | Developer</strong></h2>
  <a href="#aboutme"><button>Explore </button></a>
  <!--
  <div class="wave" id = "aboutme">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
  </div>
  -->
</div>

<!--
<section id="about" style = "background-image: url({aboutbg});" >
-->
<section id="about">
  <div class="side">
    <h1 class="lift" id="about-header">About me</h1>
    <div class="divider"></div>
    <div class="card glass vertical">
      <p>
        Hi! I'm TechnoTalks, a teenage developer passionate about technology. I specialize in Web Development, Discord Bots, API Plugins, and Robotics, using Python, C++, Java, JavaScript, and HTML/CSS.
        <br/>
        <br/>
        I love creating with code and making a positive impact. From captivating websites to interactive bots, I thrive on challenges and constant learning.
        <br/>
        <br/>        
        Let's build something amazing together! Reach out for tech projects or to discuss the latest coding trends. 🚀
        <br/>
        <br/> 
        
      </p>
      <a href="#con"><button>Contact</button></a>
    </div>  
    <div class="cdivider"></div>

  </div>
  <!--
  <div class="wave2">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
  </div>
  -->
</section>

<section id="proj">
  <h1 class="lift">Projects</h1>
  <div class="side">
  </div>

</section>

<section id="con">

  <h1>Contact</h1>

</section>

<style>
.hero {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 110%;
}

* {
  margin: 0;
}

:root {
  font-family: "Rajdhani", sans-serif;
  line-height: 1.5;
  font-weight: 400;

  margin: 0;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  --background-color: #111519;
  --accent-color: #38b6ff;
  --proj-color: #F1E9DB;
  background-color: var(--background-color);
  overflow-x: hidden;

  scroll-behavior: smooth;
}

nav {
  position: absolute;
  top: 5%;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

nav li {
  font-size: 1.2em;
  float: right;
}

nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none; 
}


#about {
  background-size: cover;
  background-repeat: no-repeat;
}

#proj {
  background-image: linear-gradient(var(--proj-color), var(--background-color));;
}

#con {
  background-color: var(--background-color);
  height: 50vh;
}

.glass{
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border:1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.card {
  width: 500px;
  height: 300px;
  margin: 100px auto;
  padding: 1em;
  text-align: left;
  transition: transform 1.25s;
  transform: translateZ(0);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.card:hover {
  transform: scale(1.048)
}

.card p {
  margin-top: 10px;
}

.divider {
  height: 75%;
  border-image: linear-gradient(var(--background-color), var(--accent-color)) 30;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  margin-left: 5%;
  margin-right: 5%;
}

@media only screen and (max-width: 1230px) {
  .vertical {
    min-width: 40vw;
  }
}

@media only screen and (max-width: 650px) {
  #about-header {
    display: none;
  }
  .divider {
    display: none;
  }
  .vertical {
    min-width: 50vw;
  }
}

.cdivider{
  margin-left: 0.5%;
  margin-right: 0.5%;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: none;
  border-radius: 50px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--accent-color); 
  border-radius: 50px;
}

.vertical {
  width: 25vw;
  height: 550px;
  margin: 0;
  overflow-y:auto;
}
.side {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

h2 {
  font-size: 1.5em;
}

p {
  font-size: 1.2em;
}

strong {
  background: linear-gradient(to right, white 0%, var(--accent-color) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Curve CSS
.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
}

.wave .shape-fill {
    fill: #38B6FF;
}

.wave2 {
    position: absolute;
    bottom: -100vh;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.wave2 svg {
    position: relative;
    display: block;
    width: calc(141% + 1.3px);
    height: 90px;
    transform: rotateY(180deg);
}

.wave2 .shape-fill {
    fill: #F1E9DB;
}

*/


/* -------------------- */

.lift {
  text-shadow: 1px 1px 3px rgb(204, 204, 204);
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
  z-index: -3;
}

#blur {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -2;
  backdrop-filter: blur(10vmax);
  -webkit-backdrop-filter: blur(10vmax);
}

button {
  font-size: 1.3em;
  font-family: inherit;
  text-align: center;

  color: white;
  background-color: transparent;
  border: 2px solid var(--accent-color);

  padding: 7px 40px 7px 40px;
  margin-top: 10px;
  margin-right: 5%;
  margin-left: 5%;
  width: 150px;

  border-radius: 5px;
  transition: background-color 0.5s;
  text-align: center;
}

button:hover {
  background-color: var(--accent-color);
}

</style>