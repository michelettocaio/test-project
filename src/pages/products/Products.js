import List from '../../components/List.vue';

export default {
    name: 'products',
    components: {
        List,
    },
    data() {
        return {
            products: [],
            newproduct: {},
            clickable: true,
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
        addProduct() {
            this.clickable = false;
            if (this.newproduct && this.newproduct.cod && this.newproduct.name && this.newproduct.price) {
                this.$http.post(window.urlMock + 'products', {
                    name: this.newproduct.name,
                    price: this.newproduct.price,
                    cod: this.newproduct.cod,
                }).then(function(){
                    this.newproduct = [];
                    this.getProducts();
                    this.clickable = true;
                })
                this.clickable = true;
            }
        },
        updateProduct(newValue) {
           return this.products = newValue;
        }
    },
    mounted() {
        this.getProducts();
    },
}
