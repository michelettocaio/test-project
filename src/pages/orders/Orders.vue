<template>


    <div class="orders-container md-elevation-10">
        <div class="orders-left">
            <div class="orders-left-content">
                <h1>Cadastro de Pedidos</h1>
                <md-field>
                    <label>Nome do cliente</label>
                    <md-input class="client" v-model="neworder.client"></md-input>
                </md-field>
                <span class="title">Produtos</span>
                <md-table class="prods order-prod-table md-scrollbar">
                    <md-table-row class="top-row">
                        <md-table-head>Código</md-table-head>
                        <md-table-head>Nome</md-table-head>
                        <md-table-head>Preço</md-table-head>
                        <md-table-head>Ação</md-table-head>
                    </md-table-row>
                    
                    <md-table-row v-for="(product) in products" :key="product.id">
                        <md-table-cell>{{product.cod}}</md-table-cell>
                        <md-table-cell>{{product.name}}</md-table-cell>
                        <md-table-cell>{{product.price}}</md-table-cell>
                        <md-table-cell> 
                           

                            <svg version="1.1"  v-on:click="addProduct(product)" class="actions" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve">
                            <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "/>
                            </svg>
                       
                        </md-table-cell>
                    </md-table-row>
                </md-table>
                <span class="title">Produtos no Pedido</span>
                <md-table class="prodorders order-prod-table md-scrollbar">
                    <md-table-row class="top-row">
                        <md-table-head>Código</md-table-head>
                        <md-table-head>Nome</md-table-head>
                        <md-table-head>Preço</md-table-head>
                        <md-table-head>Ação</md-table-head>
                    </md-table-row>
                    
                    <md-table-row v-for="(selectProduct, index) in selectProducts" :key="index">
                        <md-table-cell>{{selectProduct.cod}}</md-table-cell>
                        <md-table-cell>{{selectProduct.name}}</md-table-cell>
                        <md-table-cell>{{selectProduct.price}}</md-table-cell>
                        <md-table-cell>                      
                            <svg  v-on:click="removeProduct(index)" class="actions" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve">
                            <rect y="20" width="42" height="2"/>
                            </svg>                       
                        </md-table-cell>
                    </md-table-row>
                </md-table>
                
            </div>
            <div class="button-content">
                <div class="total">
                    <span class="title">Total do pedido</span>
                    <label>R$ {{neworder.total || 0}}</label>
                </div>
                <div class="button-add">
                    <md-button class="btnaddo md-riddle" :disabled="!clickable || !neworder.client" v-on:click="finishOrder()">Cadastrar</md-button>
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
        
        <div class="orders-right">
            <h1>Listagem de Pedidos</h1>
            <div class="list">
                <ListOrder :orders="orders" @order-updated="updateOrders" />
            </div>
        </div>
    </div> 
</template>


<script src="./Orders.js"></script>
<style lang="scss" src="./Orders.scss"></style>
