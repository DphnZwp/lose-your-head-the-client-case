<script>
	import * as prismic from '@prismicio/helpers';
	export let data;
  const stories = data.documents
  console.log(stories);
</script>

  <section class="create-story">
    <img class="create-story__clock" src="/clock.png" alt="">
  </section>
  <!-- <pre>{JSON.stringify(stories, null, 2)}</pre> -->
  <section class="stories">
    {#each stories as data}
      <article class="story">
        <section class="story__title-background">
          {@html prismic.asHTML(data.data.title)}
        </section>
        <a class="story__link" href="/{data.uid}">Read story {data.uid} »</a>
        <section class="story__image-background">
          <img class="story__image" src="{data.data.image.url}" alt="">
        </section>
      </article>
    {/each}
  </section>
  

<style>
  .create-story {
    margin-top: 2em;
    max-width: 60em;
    display: flex;
    justify-content: center;
  }

  .create-story__clock {
    width: 18em;
    height: 18em;
    display: none;
  }

  .stories {
    margin-top: 2em;
    margin-right: 2em;
    margin-bottom: 4em;
    margin-left: 2em;
    display: flex;
    justify-content: flex-start;
    gap: 3em;
    overflow-x: scroll;
  }

  .story {
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .story__title-background {
    margin-top: 3em;
    margin-bottom: 1.5em;
    padding: 1em;
    width: 27em;
    min-height: 8.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--brown);
  }

  .story__title-background::before {
    content: url(/rope.png);
    transform: translateY(-4.4em) translateX(-42px) scale(.83);
    display: block;
    width: 100%;
    height: 1em;
    z-index: -1;
  }
  
  .story__image {
    margin-top: 1.8em;
    margin-left: auto;
    margin-right: auto;
    width: 24.8em;
    height: 24.3em;
    display: block;
    object-fit: cover;
  }

  .story__image-background {
    background-image: url(/frame.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 28em;
  }

  .story__link {
    margin-bottom: 1.5em;
    margin-right: auto;
    margin-left: auto;
    padding: 1em 2em;
    font-size: 1.25rem;
    color: var(--black);
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    border-radius: 2em;
    background-color: var(--brown);
  }

  .story__link:hover {
    background-color: var(--white);
  }

  @media (min-width: 70em) {
    .create-story {
      width: 60em;
    }

    .create-story__clock {
      display: block;
    }
  }
</style>