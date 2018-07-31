export default {
    name: 'dashboard',
    data(){ 
        return {
            totalProducts: '',
            totalSells: '',
            totalOrders: '',
        }
    },
    methods: {
        getProducts() {
            this.$http.get(window.urlMock+'/products').then((data) => {
                this.totalProducts = data.body.length;
            })
        },
        getSells() {
            var total = 0;
            this.$http.get(window.urlMock+'/orders').then((data)=> {
                this.totalSells = data.body.forEach(e => {
                    total = total + Number(e.total);
                });   
                this.totalSells = total;
            })
        },
        getOrders() {
            this.$http.get(window.urlMock+'/orders').then((data) => {
                this.totalOrders = data.body.length;
            })
        }
    },
    mounted() {
        this.getProducts();
        this.getSells();
        this.getOrders();
    },
}