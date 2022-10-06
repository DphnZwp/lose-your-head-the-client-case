<script>
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Ilojo Bar</title>
	<!-- FONTS -->
	<link href="https://fonts.googleapis.com/css2?family=Signika:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<main>
	<slot />
</main>

<style>
</style>