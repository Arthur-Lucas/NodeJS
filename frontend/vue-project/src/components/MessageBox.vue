<script setup>
</script>

<template>
  <div class="message-wrapper">
      <ul class="message-list">
          <li class="message-item">
              <p class="username">Name 1</p>
              <p class="message">Message 1</p>
          </li>
          <li class="message-item">
              <p class="username">Name 2</p>
              <p class="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In esse ea quis quasi error quaerat eligendi impedit non! Dolorum, iusto.</p>
          </li>
          

      </ul>
  </div>
</template>
<style>
    @media (min-width: 1250px) {
        .message-wrapper{
            height:100%;
        }
        .message-list{
            list-style-type: none;
            padding: 0 10px;
            display:flex;
            flex-direction:column;
            justify-content: flex-end;
            height:100%;
            overflow-y: hidden;
        }
        .message-item{
            margin-top: 20px;
            border-bottom:1px solid var(--color-text);
        }
        .message-item:first-of-type{
            margin-top: 0;
        }
        .message-item:last-of-type{
            margin-bottom: 20px;
        }
        .username{
            color: var(--vt-c-green);
            font-size:1.2rem;
        }
    }
</style>
