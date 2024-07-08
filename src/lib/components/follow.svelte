<script lang="ts">
	import { browser } from "$app/environment";
	import { tweened } from 'svelte/motion';
	import { backOut } from 'svelte/easing';

	let x = tweened(0, {
			duration: 2000,
			easing: backOut
		})

	let y = tweened(0, {
			duration: 2000,
			easing: backOut
		}) 

	let offset = { x: 0, y: 0 }; 

	function mouseMove(event: { clientX: number; clientY: number; }) {
		x.set(event.clientX - offset.x)
		y.set(event.clientY - offset.y)
	}

	$: if (browser) {
		let blobDimensions = document.getElementById("blob")?.getBoundingClientRect()
		offset.x = (blobDimensions?.width ?? 320) / 2
		offset.y = (blobDimensions?.height ?? 320) / 2
		document.addEventListener('mousemove', mouseMove)
	}

	$: console.log(offset.x, offset.y)

</script>

<div id="blob" class="z-[-1] absolute w-[20rem] h-[17rem] rounded-[50%] bg-gradient-to-br from-primary-500 via-tertiary-500 to-secondary-500 opacity-30 overflow-x-hidden" style="top: {$y}px; left: {$x}px; animation-name: spin; animation-duration: 30s;">
</div>

<style>
	@keyframes spin {
  from {
    translate: rotate(0deg);
  }

  to {
    translate: rotate(360deg);
  }
}
</style>