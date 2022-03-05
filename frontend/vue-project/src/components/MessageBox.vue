<template>
  <div class="message-wrapper">
      <ul class="message-list">
          <li v-for="message in messages">
            <p class="username">{{ message.author }}</p>
            <p class="message">{{ message.text }}</p>
          </li>
      </ul>
      
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            messages: []
        }
    },
    methods: {
        async getMessages() {
            axios({
                method: 'get',
                url: 'http://localhost:3001/user/conv',
            })
            .then((response) => {
                this.messages = response.data
            })
        }  
    },
    created() {
        this.getMessages()
        setInterval(this.getMessages, 5000)
    }

}
</script>


<style>
    @media (min-width: 1250px) {
        .message-wrapper{
            height:100%;
            overflow: hidden;
        }
        .message-list{
            list-style-type: none;
            padding: 0 10px;
            display:flex;
            flex-direction:column;
            justify-content: flex-end;
            height:100%;
            
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
