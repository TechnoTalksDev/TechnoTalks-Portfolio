<script>
  export let experiences;
</script>


<div class="card variant-glass-surface flex flex-col p-6 w-fit max-w-[98vw] overflow-x-auto overflow-y-hidden h-fit row-start-2" style="grid-column: 1 / 2;">
				
  <div class="flex flex-col gap-6 justify-items-center w-fit">
    {#each experiences as experience, index}
        <div
          class="card card-hover variant-glass-surface p-4 relative flex flex-row items-center w-[25rem] max-h-[15rem]"
        >

        <div class="w-[70%]">
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >{experience.date}</time
          >
          <h4 class="text-lg font-semibold gradient-heading animate-gradient">
            {experience.company}
          </h4>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {experience.position}
          </h3>

        </div>
        <span class="w-[6px] h-[80%] rounded-xl gradient-bar animate-gradient ml-1 mr-2" />
        
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          {experience.blurb}
        </p>
        
          <!-- Dot centered on the line -->
        </div>

    {/each}
  </div>

</div>