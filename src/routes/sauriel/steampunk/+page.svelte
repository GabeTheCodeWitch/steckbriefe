<h1>Steampunk Charaktere:</h1>
<ul>
  {#each characters as character}
    <li>{character.name}</li>
  {/each}
</ul>

<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  $: characters = data.characters;
</script>
