<script setup>
import MessageBox from '../components/MessageBox.vue'
import TypeBox from '../components/TypeBox.vue'
</script>

<template>
  <main>
    <div class="container">
      <MessageBox />
      <TypeBox />
    </div>
  </main>
</template>
<style>
@media (min-width:1250px) {
  .container{
    height:80vh;
    margin: 10px;
    border: 1px solid var(--color-text);
  }


}
</style>