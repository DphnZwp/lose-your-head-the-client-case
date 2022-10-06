<script>
	import * as prismic from '@prismicio/helpers';
	export let data;
	let { document } = data;
  console.log(data.documents);
</script>

<section>
	{@html prismic.asHTML(document.data.title)}
</section>

<style>
</style>