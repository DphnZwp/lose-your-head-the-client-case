<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>w00t</title>
</svelte:head>

<Nav />

<main>
	<slot />
</main>

<footer>
	<p>Copyleft 2022, all wrongs reversed.</p>
</footer>

<style>
</style>