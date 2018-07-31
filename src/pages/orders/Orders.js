import ListOrder from '../../components/ListOrder.vue';

export default {
    name: 'orders',
    components: {
        ListOrder
    },
    data() {
        return {
            neworder: [],
            clickable: true,
            orders: [],
            products: [],
            selectProducts: [],
        }
    },
    computed: {
        products() {
            return this.products = this.getProducts();
        }
    },
    methods: {
        getProducts() {
            this.$http.get(window.urlMock + 'products').then(function(data) {
                return this.products = data.body;
            })
        },
        getOrders() {
            this.$http.get(window.urlMock + 'orders').then(function(data) {
                return this.orders = data.body;
            })
        },
        addProduct(product){
            this.selectProducts.push(product);
            this.updateTotal();
        },
        removeProduct(index){
            this.selectProducts.splice(index, 1);
            this.updateTotal();
        },
        updateTotal(){
            var total = 0;
            if(this.selectProducts){
                this.selectProducts.forEach(e => {
                    total = total + Number(e.price);
                });
                this.neworder.total = total;
            }else{
                this.neworder.total = 0
            }
        },
        finishOrder() {
            this.clickable = false;
            this.neworder.products = this.selectProducts;
            this.$http.post(window.urlMock+'orders',
                            { client: this.neworder.client,
                              total: this.neworder.total,
                              products: this.neworder.products}).then(() => {
                                this.neworder = [];
                                this.selectProducts = [];
                                this.clickable = true;
                                this.getOrders();
                              });
                              this.clickable = true;
        },
        updateOrders() {
            this.getOrders();
         }
    },
    mounted() {
        this.getProducts();
        this.getOrders();
    },
}