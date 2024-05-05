<div class="user-cards">
  <a class="user-card" href="/sauriel"> <h1>Sauriel</h1> </a>
  <a class="user-card" href="/gabe"> <h1>Gabe</h1> </a>
</div>

<style>
  .user-cards {
    margin: 5rem;
    display: flex;
    gap: 2em;
    justify-content: center;
    align-items: center;
  }

  .user-card {
    width: 20vw;
    aspect-ratio: 3/2;
    background-color: var(--blur);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--animation);
  }

  .user-card:hover {
    background-color: var(--transparent);
  }
</style>
