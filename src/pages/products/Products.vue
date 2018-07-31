<template>
    <div class="products-container md-elevation-10">
        <div class="products-left">
            <div class="products-left-content">
                <h1>Cadastro de Produtos</h1>
                <md-field>
                    <label>Código do Produto</label>
                    <md-input class="cod" v-model="newproduct.cod"></md-input>
                </md-field>
                <md-field>
                    <label>Nome do Produto</label>
                    <md-input class="name" v-model="newproduct.name"></md-input>
                </md-field>
                <md-field>
                    <label>Preço</label>
                    <md-input class="price" v-model="newproduct.price" type="Number"></md-input>
                </md-field>
            </div>
            <div class="button-content">
                <div class="button-add">
                    <md-button class="btnadd md-riddle" :disabled="!clickable || !newproduct.price || !newproduct.cod || !newproduct.name" v-on:click="addProduct()">Cadastrar</md-button>
                </div>
            </div>
            <div class="return">
                <svg class="return" v-on:click="$router.push({name :'home'})" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="400.004px" height="400.004px" viewBox="0 0 400.004 400.004" style="enable-background:new 0 0 400.004 400.004;"
                xml:space="preserve">
                <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
                    c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
                    c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
                    C400.004,190.438,392.251,182.686,382.688,182.686z"/>
            </svg>
            </div>
        </div>
        
        <div class="products-right">
            <h1>Listagem de Produtos</h1>
            <div class="list">
                <List :products="products" @product-updated="updateProduct" />
            </div>
        </div>
    </div>
</template>


<script src="./Products.js"></script>
<style lang="scss" src="./Products.scss"></style>
