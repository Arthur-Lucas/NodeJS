<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';


@media (hover:hover){
  nav a:hover{
    background-color: rgba(66, 184, 131, 0.3);
  }
}

@media (min-width: 1024px) {
  nav{
    padding: 10px;
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--vt-c-green);
  }
  nav a{
    color: var(--color-text);
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0 10px;
    transition: background-color .3s;
    padding: 5px 10px;
    border-radius: 3px;
  }
  nav a:first-of-type{
    margin-left: 0;
  }
  nav a.router-link-exact-active{
    color: var(--vt-c-green);
  }
  

}
</style>
