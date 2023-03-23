const MyNameApp = {
    data(){
        return{
            name: "Nelson",
            age: 31
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")