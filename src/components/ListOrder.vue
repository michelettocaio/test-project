<template>
    <div class="list-component">
        <md-table class="align md-scrollbar">
            <md-table-row class="top-row">
                <md-table-head>Cliente</md-table-head>
                <md-table-head>Quantidade de produtos</md-table-head>
                <md-table-head>Total do pedido</md-table-head>
                 <md-table-head>Ações</md-table-head>
            </md-table-row>
            <md-table-row v-for="(order) in orders" :key="order.id">
                <md-table-cell>{{order.client}}</md-table-cell>
                <md-table-cell>{{order.products.length}}</md-table-cell>
                <md-table-cell>{{order.total}}</md-table-cell>
                <md-table-cell> 
                <svg v-on:click="removeOrder(order)" class="actions" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 25 25" version="1.1">
                <g id="surface1">
                <path d="M 24.179688 4.929688 L 16.597656 12.511719 L 24.179688 20.09375 C 25.304688 21.222656 25.304688 23.050781 24.179688 24.179688 C 23.613281 24.742188 22.875 25.023438 22.136719 25.023438 C 21.398438 25.023438 20.660156 24.742188 20.097656 24.179688 L 12.511719 16.59375 L 4.929688 24.179688 C 4.367188 24.742188 3.625 25.023438 2.886719 25.023438 C 2.148438 25.023438 1.410156 24.742188 0.847656 24.179688 C -0.28125 23.050781 -0.28125 21.222656 0.847656 20.09375 L 8.429688 12.511719 L 0.847656 4.929688 C -0.28125 3.800781 -0.28125 1.972656 0.847656 0.84375 C 1.972656 -0.28125 3.800781 -0.28125 4.929688 0.84375 L 12.511719 8.429688 L 20.09375 0.84375 C 21.222656 -0.28125 23.050781 -0.28125 24.175781 0.84375 C 25.304688 1.972656 25.304688 3.800781 24.179688 4.929688 Z M 24.179688 4.929688 "/>
                </g>
                </svg>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
export default {
  name: "ListOrder",
  props: ["orders"],
  methods: {
    removeOrder(order) {
       this.$http.delete(window.urlMock+'/orders/'+order.id).then(function() {
           this.$http.get(window.urlMock+'/orders/').then(function(res) {
               this.$emit('order-updated', res.body);
           } )
       })
    }
  }
};
</script>

<style scoped lang="scss">

.align {
    text-align: center;
}
</style>