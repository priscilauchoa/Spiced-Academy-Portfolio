<script setup>

import { ref } from 'vue'

const email = ref('')
const password = ref('')

function login() {
        console.log(email.value, password.value)
    }
</script>

<template>

    {{ email }}
    <form action="" v-on:submit.prevent="login">
    <input type="text" placeholder="email" v-model="email">
    

    <input type="text" placeholder="password" v-model="password">
    <button type="submit">Submit</button>
    </form>
</template>

<style></style>