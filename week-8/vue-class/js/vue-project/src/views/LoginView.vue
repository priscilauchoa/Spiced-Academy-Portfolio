<script setup>

import { ref, reactive } from 'vue'


const user = reactive({
    email: '',
    password: ''
})

function login() {
        console.log(user.email, user.password, user)
    }
</script>

<template>
<h1 class="text-blue font-bold text-3xl">Login</h1>
    {{ user.email }}
    {{ 
        user.password
     }}

     <template v-if="user.email.length <= 0" >Email empty</template>
    <form action="" v-on:submit.prevent="login">
    <input type="text" placeholder="email" v-model="user.email">
    

    <input type="text" placeholder="password" v-model="user.password">
    <button type="submit">Submit</button>
    </form>
</template>

<style></style>