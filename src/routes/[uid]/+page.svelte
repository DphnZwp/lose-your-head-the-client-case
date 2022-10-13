<script>
	import * as prismic from '@prismicio/helpers';
	export let data;
	let { document } = data;
</script>
  <!-- <pre>{JSON.stringify(document, null, 2)}</pre> -->
	<article class="story">
		<section class="story__hero">
			{@html prismic.asHTML(document.data.title)}
		</section>
		<section class="story__content">
			{@html prismic.asHTML(document.data.paragraph)}
			<img src="{document.data.image.url}" alt="">
			<img src="{document.data.image1.url}" alt="">
			{@html prismic.asHTML(document.data.paragraph1)}
			{@html prismic.asHTML(document.data.paragraph2)}
			<img src="{document.data.image2.url}" alt="">
			<img src="{document.data.image3.url}" alt="">
			{@html prismic.asHTML(document.data.paragraph3)}
			{@html prismic.asHTML(document.data.paragraph4)}
			<img src="{document.data.image4.url}" alt="">
			<img src="{document.data.image5.url}" alt="">
			{@html prismic.asHTML(document.data.paragraph5)}
		</section>
	</article>

<style>
	.story {
		margin-right: 2em;
		margin-left: 2em;
	}

	.story__hero {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.story__content {
		margin-top: 2em;
		margin-bottom: 5em;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 3em;
		align-items: center;
	}

	img {
		width: 100%;
		display: block;
	}

	/* LAPTOP */
	@media (min-width: 70em) {
		.story {
			margin-right: 10em;
			margin-left: 10em;
		}

		.story__content {
			margin-top: 2em;
			margin-bottom: 5em;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 4em;
			align-items: center;
		}
	}
</style>