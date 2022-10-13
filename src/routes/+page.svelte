<script>
	import * as prismic from '@prismicio/helpers';
	export let data;
  const stories = data.documents
  // console.log(stories);
</script>

  <header class="hero">
    <h1 class="hero__heading">Read the stories</h1>
  </header>

  <section class="create-story">
    <img class="create-story__clock" src="/images/clock.png" alt="">
    <h2 class="create-story__heading">Click on the book to create a story</h2>
    <svg class="create-story__icon" width="62" height="65" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 7L32 57.2765" stroke="white" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 32.1382L31 57.2765L55 32.1382" stroke="white" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <a class="create-story__illustration-link" href="/create-story">
      <svg class="create-story__illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228.73 429.04"><defs><style>.cls-1{stroke:#afb49f;stroke-linecap:round;}.cls-1,.cls-2{stroke-linejoin:round;}.cls-1,.cls-3{fill:none;}.cls-4{fill:#b9833b;}.cls-2,.cls-5{stroke:#b9833b;stroke-width:2px;}.cls-2,.cls-5,.cls-6{fill:#cb9b5b;}.cls-7{fill:#e3e4de;}.cls-5{stroke-miterlimit:10;}</style></defs><g id="book-stand"><path class="cls-4" d="M154.13,380.66c6.51-2.66,13.13-5.31,19.87-7.93,6.97-2.72,13.87-5.33,20.68-7.84-.06-1.34-.1-2.73-.1-4.18,0-1.39,.04-2.73,.1-4.02-8.62-5.75-17.24-11.5-25.86-17.26-2.36,1.4-6.5,3.42-12,4-8.52,.89-15.02-2.24-17.54-3.63-.72,.33-1.92,.52-2.64,.85l-3.06,1.3,1.94,4.28-43.66-7.8c-3.84,7.84-10.29,18.31-19.8,27.46-11.8,11.35-23.73,16.83-30.21,19.74-5.11,2.29-9.55,3.84-12.77,4.85-.17,3.21-.34,6.41-.51,9.62,7.69,6.52,15.38,13.05,23.06,19.57,4.36-1.74,51.49-20.55,54.64-21.11,1.07-.19,2.04,0,2.04,0,1.67,.42,2.78,1.43,3.06,1.7,1.71,1.63,15.93,12.89,36.09,28.77l36.43-14.13c.17-2.87,.33-5.48,.5-8.34-11.59-7.36-20.09-14.69-25.84-20.48-1.62-1.63-3.02-3.38-4.41-5.43Zm-9.74-17.49c-3.02-5.75-5.56-10.9-7.65-15.26l.02,.03c2.49,5.21,5.15,10.53,8,15.95,2.82,5.37,5.67,10.53,8.51,15.48-2.5-3.92-5.08-8.95-8.88-16.19Z"/><path class="cls-6" d="M1.33,18.7C29.82,51.09,58.3,83.47,86.78,115.85l141.89-29.11L141.16,0C94.55,6.23,47.94,12.47,1.33,18.7Z"/><path class="cls-4" d="M218.84,117.89c2.97,1.57,5.94,3.15,8.9,4.72-23.98,5.58-47.95,11.21-71.9,16.89-23.74,5.64-47.48,11.33-71.2,17.08-27.26-13.99-54.52-27.98-81.79-41.97,2.31-.58,4.62-1.17,6.93-1.75,25.17,13.31,50.34,26.61,75.51,39.92,44.51-11.63,89.03-23.26,133.54-34.89Z"/><path class="cls-4" d="M87.38,115.26c-1.27,1.46-1.82,3.64-3.09,5.11C56.45,88.69,27.88,56.31,.04,24.64c-.05-.7-.06-1.56,.06-2.53,.15-1.23,.93-2.64,1.23-3.4L87.38,115.26Z"/><path class="cls-2" d="M81.16,96.53h0c.04-.3,.1-.71,.22-1.19,.07-.29,.46-1.77,1.51-3.33,1.27-1.88,2.83-2.89,4.02-3.66,1.06-.69,2.67-1.57,4.8-2.19,16.25-3.27,32.49-6.55,48.74-9.82,21.14-4.05,42.29-8.09,63.43-12.14h0s8.51-1.53,8.85,4.26c.34,5.79-1.53,7.15-1.53,7.15l-126.13,26.04-3.91-5.11Z"/><path class="cls-4" d="M84.88,101.37c.22-3,1.07-6.69,3.8-9.35,2.63-2.57,5.92-3.12,7.04-3.32,6.19-1.1,108.41-20.6,112-21.62,.4-.11,2.07-.65,3.66,.09,.32,.15,.54,.3,.71,.47,.51,.5,.64,1.04,.7,1.02,.09-.03,.09-1.17-.5-2.19-.93-1.61-2.86-2.06-3.67-2.26-1.56-.37-2.82-.2-4.06-.02-2.04,.3-4.63,.73-7.65,1.35-8.22,1.7-92.24,17.33-104.67,20.5-.52,.13-2.43,.63-4.61,1.89-1.39,.8-3.55,2.07-5.07,4.62-.91,1.53-.99,3.34-1.15,4.25,.57,.76,.86,1.14,1.44,1.9,.68,.9,1.36,1.79,2.05,2.67Z"/><path class="cls-6" d="M7.29,32.88c.84,26.76,1.68,53.52,2.51,80.29,25.17,13.2,50.33,26.41,75.5,39.61v-31.83C59.3,91.6,33.29,62.24,7.29,32.88Z"/><path class="cls-4" d="M2.87,114.62c.01,1.48,.03,2.95,.04,4.43,8.58,4.35,17.19,8.75,25.82,13.21,19.08,9.85,37.86,19.76,56.35,29.7v-5.47c-27.4-13.96-54.81-27.91-82.21-41.87Z"/><path class="cls-4" d="M85.08,161.96c26.11-6.69,52.63-13.26,79.57-19.68,21.25-5.07,42.3-9.94,63.16-14.62-.02-1.68-.04-3.36-.06-5.04-28.56,6.42-57.39,13.12-86.49,20.11-18.88,4.53-37.61,9.12-56.17,13.76v5.47Z"/><path class="cls-4" d="M139.15,148.23c-.6,60.72-1.21,121.44-1.81,182.16-9.36,3.3-18.72,6.6-28.09,9.89l-19.09-15c-.31-55.21-.61-110.42-.92-165.63,16.63-3.8,33.27-7.61,49.9-11.41Z"/><path class="cls-4" d="M90.16,325.28c-2.2,1.98-4.4,3.96-6.61,5.94,8.22,7.15,16.45,14.3,24.67,21.45,12.13-5.13,24.26-10.26,36.38-15.38-2.43-2.3-4.85-4.6-7.28-6.89-9.23,3.23-18.47,6.47-27.7,9.7-6.49-4.94-12.98-9.87-19.47-14.81Z"/><path class="cls-4" d="M84.04,331.85c-11.02,3.85-22.49,7.89-33.51,11.74v8.81c6.49,4.96,12.98,9.91,19.47,14.87l8.3-8.04,13.82-20.6-8.07-6.79Z"/><path class="cls-6" d="M90.9,340.33c-2.79,2.11-8.66,5.76-15.87,7.18-3.33,.65-14.34,2.91-23.32-3.06-.51-.34-.92-.64-1.19-.85l33.68-11.82c2.63,2.29,5.27,4.58,7.9,6.87-.4,.56-.8,1.13-1.2,1.69Z"/><path class="cls-3" d="M111.33,351.81c2.66,11.1,7.5,25.95,16.72,41.83,6.74,11.59,14.06,20.72,20.44,27.59-.11,2.93-.24,3.4-.37,4.73-.21,2.23-.05,2.75-.17,2.89-.61,.69-9.64-5.67-40.88-31.26,.54-14.91,1.08-29.82,1.62-44.72,.88-.35,1.76-.71,2.64-1.06Z"/><path class="cls-3" d="M184.35,407.09c-8.92,3.71-17.91,7.4-26.98,11.06-2.97,1.2-5.94,2.39-8.9,3.58"/><path class="cls-3" d="M108.68,353.39c-5.19,9.95-13.87,23.75-27.94,37.1-10.37,9.85-20.67,16.59-28.94,21.15l-.1,7.76c18.5-6.97,37-13.93,55.5-20.9,.49-15.03,.98-30.07,1.47-45.1Z"/><path class="cls-6" d="M51.71,412.06c-7.69-7.29-15.38-14.58-23.07-21.87,10.1-2.97,17.85-6.89,23.17-10.02,20.19-11.91,31.15-27.89,35.49-34.35,2.01-3,3.54-5.58,4.57-7.39,5.54,4.94,11.08,9.88,16.62,14.82-5.8,9.7-14.22,21.72-26.17,33.88-10.89,11.07-21.67,19.16-30.61,24.94Z"/><path class="cls-6" d="M111.29,351.48c7.43-3.18,14.85-6.36,22.28-9.53,3.98,9.08,7.91,16.26,10.83,21.23,6.38,10.86,12.68,21.4,23.96,31.62,6.3,5.7,12.16,9.51,16.03,11.79l-35.68,15.06c-6.64-7.18-14.45-16.96-21.54-29.56-8.7-15.46-13.31-29.82-15.87-40.6Z"/><path class="cls-6" d="M136.91,340.53c.37-.15,.74-.31,1.12-.47,.37-.16,.72-.32,1.08-.48,2.29,1.2,5.47,2.52,9.43,3.12,9.44,1.43,16.93-2.17,19.82-3.77,8.78,5.91,17.55,11.83,26.33,17.74-5.38,1.29-17.22,3.36-31.33-.67-13.72-3.92-22.52-11.59-26.45-15.48Z"/><path class="cls-4" d="M228.67,86.74c.03,.61,.06,1.25,.06,1.93,0,.74-.02,1.45-.06,2.13-48.23,10.14-96.5,20.24-144.73,30.38,.91-1.72,2.18-4.04,3.1-5.76,23.56-4.86,47.13-9.68,70.71-14.45,23.64-4.79,47.28-9.53,70.93-14.23Z"/><path class="cls-5" d="M85.3,120.36v32.38c44.58-10.53,89.16-21.06,133.73-31.6,.44-9.73,.88-19.46,1.32-29.18l-135.06,28.4Z"/><path class="cls-4" d="M160.76,116.68c-.16-.26-1.5-2.39-3.77-2.49-2.69-.12-4.78,2.71-5.3,5.11-.06,.27-.86,4.21,1.72,5.87,2.07,1.34,4.88,.27,6.38-1.21,1.91-1.89,2.33-5.04,.96-7.28Z"/></g><g id="book"><path class="cls-7" d="M97.14,24.77c-1.99-1.59-5.5-3.93-10.24-4.67-7.49-1.16-14.07,2.57-23.28,6.98-7.2,3.45-10.32,5.61-18.38,8.64-2.93,1.1-5.37,1.89-6.98,2.38,15.06,16.68,31.2,35.32,46.26,52,0,0,3.74-3.45,10.14-4.65,6.4-1.2,98.77-19.4,98.77-19.4-32.61-32.83-45.11-44.31-46.4-44.23-.04,0-.94,.07-2.17,.06,0,0-1.12,0-2.26-.09-4.09-.29-27.15-8.65-39.57-2.13-1.5,.79-3.71,2.24-5.89,5.09Z"/><path class="cls-1" d="M96.99,24.62c15.89,16.54,32.28,33.87,48.16,50.41"/></g></svg>
    </a>
  </section>
  <!-- <pre>{JSON.stringify(stories, null, 2)}</pre> -->
  <section class="stories">
    {#each stories as data, index}
      <article class="story">
        <section class="story__title-background">
          {@html prismic.asHTML(data.data.title1)}
        </section>
        <a class="story__link" href="/{data.uid}">Read story {index+1} »</a>
        <section class="story__image-background">
          <img class="story__image" src="{data.data.image.url}" alt="">
        </section>
      </article>
    {/each}
  </section>
  

<style>
  .hero {
    flex: 100%;
  }

  .create-story {
    margin-top: 2em;
    flex: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .create-story__clock {
    margin-bottom: 1em;
    width: 12em;
    height: 12em;
    display: none;
  }

  .create-story__heading {
    margin-bottom: .5em;
    font-size: 2rem;
    text-align: center;
    text-decoration: none;
    color: var(--white);
    max-width: 10em;
  }

  .create-story__icon {
    margin-bottom: 2em;
    animation: up-down 1.25s infinite;
  }

  @keyframes up-down {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(.5em);
    }
    100% {
      transform: translateY(0);
    }
  }

  .create-story__illustration-link {
    cursor: unset;
  }

  .create-story__illustration {
    width: 100%;
  }

  #book:hover {
    transition: transform .5s ease-in-out;
    transform: translateY(-.5em);
    cursor: pointer;
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
    flex: 3;
  }

  .story {
    margin-bottom: 3em;
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
    content: url(/images/rope.png);
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
    width: 20em;
    display: block;
    border-width: 35px;
    border-style: solid;
    border-image: url(/images/frame.png) 30 round;
  }

  .story__image-background {
    height: 27em;
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

    .story {
      margin-right: 2em;
    }

    .stories {
      margin-right: 0;
      margin-left: 0;
    }
  }
</style>