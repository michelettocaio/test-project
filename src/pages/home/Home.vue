<template>
    <div class="home-container">
        <div class="left-container" v-on:click="navigate('products')">
            <div class="button">
                <div class="button-inside">
                    <label>Produtos</label>
                </div>
            </div>
        </div>
        <div class="middle-container" v-on:click="navigate('dashboard')">
            <div class="button">
                <div class="button-inside">
                    <label>Dashboard</label>
                </div>
            </div>
        </div>
        <div class="right-container" v-on:click="navigate('orders')">
            <div class="button">
                <div class="button-inside">
                    <label>Pedidos</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" src="./Home.scss"></style>