const app = Vue.createApp ({
    data(){
        return {
            productos: [],
            juguetes:[],
            medicamentos:[],
            /* Boton Descripcion */
            descripcion: "Descripción...",
            ocultar: "Ocultar Descripción",
            isShow: true,
            carrito: [],
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

        JSON.parse(localStorage.getItem("carrito"))
    },
    methods: {
        submit(){
            alert("Gracias por contactarse con nosotros, en breve le responderemos")
        },
        agregarCarritoM(medicamento){
                let medicamentoFiltrado = this.medicamentos.findIndex(e => e._id == medicamento._id)
                this.carrito.push(medicamento)
                if (this.medicamentos[medicamentoFiltrado].stock > 0) {
                    this.medicamentos[medicamentoFiltrado].stock -= 1
                } else {
                    alert("Disculpe no nos queda mas de este producto")
                }
            localStorage.setItem("carrito", JSON.stringify(this.carrito))
            /* console.log(this.carrito.concat(JSON.parse(localStorage.getItem("carrito")))) */
        },
        agregarCarritoJ(juguete) {
                let jugueteFiltrado = this.juguetes.findIndex(e => e._id == juguete._id)
                this.carrito.push(juguete)
                if(this.juguetes[jugueteFiltrado].stock > 0) {
                    this.juguetes[jugueteFiltrado].stock -= 1
                } else {
                    alert("Disculpe no nos queda mas de este producto")
                }
            /* localStorage.setItem("carrito", JSON.stringify(this.carrito)) */
        },
    },
    computed: { 

    }
})
app.mount("#app")
//Input File
const mascotaInput = document.querySelector('#mascotaInput');
const mascotaName = document.querySelector('.inputFileName');
const imagePreview = document.querySelector('.imgPrev');

mascotaInput.addEventListener('change', e=> {
    let input = e.currentTarget;
    let fileName = input.files[0].name;
    mascotaName.innerText = `File: ${fileName}`;

    const fileReader = new FileReader();
    fileReader.addEventListener('load', e=> {
        let imageData = e.target.result;
        imgPrev.setAttribute('src', imageData);
    })
    fileReader.readAsDataURL(input.files[0]);
})
