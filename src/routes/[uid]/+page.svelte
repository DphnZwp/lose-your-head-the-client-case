<script>
	import * as prismic from '@prismicio/helpers';
	export let data;
	let { document } = data;
</script>
	<section class="story">
    <h1 class="story__title">{document.data.title}</h1>
      <div class="story__content">
          {@html prismic.asHTML(document.data.content)}
      </div>
  </section>

<style>
	.story {
		padding: 2em;
	}

	.story__title {
		margin-bottom: .5em;
	}

	.story__content {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 2em;
	}

	@media (min-width: 70em) {
		.story__title {
			margin-bottom: 0;
		}
		.story__content {
			padding: 3em 7em;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
			gap: 2em;
		}
	}
</style>