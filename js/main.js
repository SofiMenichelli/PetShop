const app = Vue.createApp ({
    data(){
        return {
            productos: [],
            juguetes:[],
            medicamentos:[],
            /* Boton Descripcion */
            descripcion: "Descripción...",
            isShow: true,
        }
    },
    created() {
        fetch("https://apipetshop.herokuapp.com/api/articulos")
        .then(response => response.json())
        .then(data => {
            this.productos = data.response 
            this.juguetes = this.productos.filter(producto => producto.tipo == "Juguete")
            this.medicamentos = this.productos.filter(producto => producto.tipo === "Medicamento")
        })
        .catch(err => console.log(err.message))
    },
    methods: {
        toggleShow() {
            this.isShow = !this.isShow
            this.isShow ? this.descripcion = "Descripción" : this.descripcion = "Ocultar Descripción"
        },
        stockShow(){
            this.producto.forEach(producto => {
                if(producto.stock > 5) {

                }
            })
        },
        submit(){
            alert("Gracias por contactarse con nosotros, en breve le responderemos")
        }
    },
    computed: {

    }
})
app.mount("#app")