<template>
  <div class="chat-wrapper">
      <form @submit.prevent='postMessages'>
          <input type="text" name="message" id="message" placeholder="Your message" v-model="message.text">
          <input type="submit" id="send" value="Send">
      </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'post',
    data() {
        return {
            message: {
                text: ''
            }
        }
    },
    methods: {
        async postMessages() {
            if (localStorage.getItem('token')){
                axios({
                    method: 'post',
                    url: 'http://localhost:3001/user/message',
                    headers: {'Authorization': localStorage.getItem('token')},
                    data: {
                        text: this.message.text
                    }
                })
                .then((response) => {
                this.message.text = ''
                })
            }
        }
    }
}
</script>
<style>
    @media (min-width: 1250px) {
        .chat-wrapper{
            margin-top: 20px;
        }
        form{
            height:7vh;
            display:flex;
            gap: 2.5%;
        }
        #message{
            height:75%;
            background: var(--color-background);
            outline: none;
            border:1px solid var(--vt-c-green);
            padding:8px;
            width: 85%;
            caret-color: var(--vt-c-green);
            transition: all .3s;
            font-size: 1rem;
            color: var(--vt-c-green);
             border-radius:8px;
        }
        #message::placeholder{
            color: var(--vt-c-green);
            opacity:50%;
            font-size: 1rem;
        }
        #message:focus{
            border-width: 2px;
        }
        #send{
            width: 10%;
            height:75%;
            background-color: var(--color-background);
            outline: none;
            border:1px solid var(--vt-c-green);
            color: var(--vt-c-green);
            font-size: 1.25rem;
            cursor:pointer;
            transition: all .3s;
            border-radius:8px;
        }
        #send:hover{
            background-color: var(--vt-c-green);
            color:var(--color-background);
        }
    }
</style>
