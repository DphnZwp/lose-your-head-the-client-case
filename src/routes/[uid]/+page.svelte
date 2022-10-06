<script>
	import * as prismic from '@prismicio/helpers';
	export let data;
	let { document } = data;
</script>

<section>
	{@html prismic.asHTML(document.data.title)}
</section>

<style>
</style>