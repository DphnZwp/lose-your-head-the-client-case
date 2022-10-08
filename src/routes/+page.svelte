<script>
	import * as prismic from '@prismicio/helpers';
	export let data;
  const stories = data.documents
  console.log(stories);
</script>

<section>
	<!-- {@html prismic.asHTML(documents[0].data.title)} -->
  {#each stories as data}
    {@html prismic.asHTML(data.data.title)}
  {/each}
</section>

<style>
</style>