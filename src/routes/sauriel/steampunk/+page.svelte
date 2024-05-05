<h1>Steampunk Charaktere:</h1>
<ul>
  {#each characters as character}
    <li>
      <h2>{character.name}</h2>
      {#if character.avatarUrl}
        <img src={character.avatarUrl} alt={character.name} />
      {/if}
    </li>
  {/each}
</ul>

<style>
  img {
    width: 200px;
  }
</style>

<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  $: characters = data.characters;
</script>
