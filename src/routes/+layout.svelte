<script>
  import "../app.css";
</script>

<nav>
  <div class="nav-container">
    <a class="title" href="/">masPy</a>
    <ul class="nav-menu">
      <li><a href="/python/pengenalan">Python</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </div>
</nav>

<slot />

<style>
  nav {
    width: 100vw;
    height: 60px;
    background-color: white;
    box-shadow: rgba(167, 167, 167, 0.2) 0 0 8px 0px;
  }
  .nav-container {
    height: inherit;
    padding: 0 1em;
    margin: 0 auto;
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-container .title {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .nav-container .nav-menu {
    display: flex;
    gap: 2em;
  }
  .nav-container .nav-menu li a:hover {
    text-decoration: underline;
  }
</style>
