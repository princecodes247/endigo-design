<script lang="ts">
    import { onMount } from 'svelte';
    import { navigating } from '$app/stores';
    import { fly } from 'svelte/transition';

    import { menuStore } from '$lib/stores';
    import { Music } from '$lib/game/Music';

    const music: Music = Music.getInstance();

    // Nav Menu
    function toggleMenu(): void { menuStore.set(true); }

    // Music
    let musicPlaying: boolean = false;
    function musicPlay(): void { music.play(); musicPlaying = true; }
    function musicPause(): void { music.pause(); musicPlaying = false; }
    function musicNext(): void { music.nextTrack(); }
    onMount(() => { musicPlaying = music.playing(); });
    $: if($navigating) musicPause();
</script>

<!-- Branding -->
<a
    href="/"
    class="bg-slate-900/40 backdrop-blur-md fixed top-0 left-0 z-10 p-6 rounded-br-xl flex items-center space-x-4 hover:bg-slate-500/50"
    transition:fly|local={{y: -100, duration: 250}}
    title="Go to homepage."
>
    <img src="logo.png" class="w-[40px] h-[40px]" alt="logo">
    <div>
        <span class="block text-white text-2xl font-bold uppercase">Endigo Design</span>
        <span class="block text-xs opacity-70">The portfolio of Chris Simmons</span>
    </div>
</a>

<!-- Controls -->
<nav class="bg-slate-900/40 backdrop-blur-md fixed bottom-0 right-0 z-50 p-4 rounded-tl-xl space-x-4" transition:fly|local={{y: 100, duration: 250}}>

    <!-- Menu: Navigate -->
    <button type="button" class="btn-hollow" on:click={() => { toggleMenu(); }}>Navigate</button>

    <!-- Music Controls -->
    {#if !musicPlaying}
        <!-- Play -->
        <button type="button" class="btn-hollow" on:click={() => { musicPlay(); }} title="Play Music">♫</button>
    {:else}
    <div class="inline-flex space-x-3">
        <!-- Pause -->
        <button type="button" class="btn-hollow" on:click={() => { musicPause(); }} title="Pause Music">| |</button>
        <!-- Next -->
        <button type="button" class="btn-hollow" on:click={() => { musicNext(); }} title="Next Track">&#9654;</button>
    </div>
    {/if}

</nav>