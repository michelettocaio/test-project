
export default {
  name: 'login',
  data() {
    return{
      user: '',
      password: '',
    }
  },
  methods: {
    doLogin() {
      if(this.user && this.password){
        this.$router.push('home');
      }
    }
  }
}