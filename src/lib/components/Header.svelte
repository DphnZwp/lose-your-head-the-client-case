<script lang="ts">
	import { fly } from 'svelte/transition';
	let active = false;
</script>


<header class="header">
  <a href="/" class="header__link">
		<img class="header__arrow" src="/left-arrow.svg" alt="">
	</a>

	<a href="/" class="header__link">
		<img class="header__logo" src="/logo.svg" alt="">
	</a>
  <button class="header__menu" class:active on:click={() => (active = !active)}>
		<svg class="header__menu-icon" aria-hidden="true" focusable="false" width="108" height="64" viewBox="0 0 108 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect class="header__menu-line-top" width="108" height="14" rx="7" fill="white"/>
      <rect class="header__menu-line-middle" y="25" width="108" height="14" rx="7" fill="white"/>
      <rect class="header__menu-line-bottom" y="50" width="108" height="14" rx="7" fill="white"/>
    </svg>
    Menu  
	</button>
	{#if active}
		<nav class="header__nav" transition:fly="{{ x: 400, duration: 1000 }}">
      <ul>
        <li class="header__nav-link"><a class="header__nav-link-text" href="/"><strong>Home</strong></a></li>
        <li class="header__nav-link"><a class="header__nav-link-text" href="/"><strong>Read the stories</strong></a></li>
        <li class="header__nav-link"><a class="header__nav-link-text" href="/">1. A Spanish migrant looking for greener pastures</a></li>
        <li class="header__nav-link"><a class="header__nav-link-text" href="/">2.  The Returnees from Brazil who changed Lagos</a></li>
      </ul>
		</nav>
	{/if}
</header>

<style>
  .header {
    padding: 2em;
    display: flex;
    justify-content: space-between;
  }

  .header__arrow {
    width: 5em;
  }

  .header__logo {
    width: 15em;
  }

  .header__menu {
    right: 0;
    font-size: 1.25rem;
    color: var(--white);
    all: unset;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: .25em;
    z-index: 1;
    cursor: pointer;
  }

  .header__menu-icon {
    width: 5em;
  }

  .active .header__menu-line-top {
		transform: translate(20px, -8px) rotate(45deg);
	}
	
	.active .header__menu-line-middle {
		opacity: 0;
	}
	
  .active .header__menu-line-bottom {
		transform: translate(-24.5px, 32px) rotate(-45deg);
  }

  .header__nav {
    padding-top: 12em;
    padding-left: 3em;
    padding-right: 3em;
    width: 20em;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--black);
  }

  .header__nav-link {
    margin-bottom: 1em;
    list-style: none;
    width: fit-content;
  }

  .header__nav-link-text {
    color: var(--white);
    font-size: 1.25rem;
    line-height: 1.4;
    text-decoration: none;
    width: fit-content;
  }

  .header__nav-link-text::after {
    content: '';
    display: block;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    left: 0;
    background-color: var(--white);
    transform-origin: bottom right;
    transition: transform .5s;
  }

  .header__nav-link-text:hover::after {
    transform: scaleX(1);
  }
</style>