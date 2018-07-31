<template>
    <div class="login-container md-elevation-10">
        <div class="login-content ">
            <h1>UDS-Software</h1>
            <md-field>            
                <label>Usuário</label>
                <md-input class="login" v-model="user"></md-input>
            </md-field>
            <md-field>
                <label>Senha</label>
                <md-input class="password" type="password" v-model="password"></md-input>
            </md-field>
            <md-button class="md-raised md-primary doLogin" v-on:click="doLogin()">Login</md-button>
        </div>
    </div>
</template>

<script src="./Login.js"></script>
<style lang="scss" src="./Login.scss"></style>