const MyNameApp = {
    data(){
        return{
            name: "Nelson",
            age: 31,
            input_name: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault(); //evita que o dado seja enviado para o servidor

            //console.log("Caiu aqui");
            console.log(this.input_name); //this pois ele busca instância
            
            this.name = this.input_name;
        }
        
    }
}

Vue.createApp(MyNameApp).mount("#app")