const app = new Vue({
    el: '#app',
    data: {
        titulo: 'hola mundo',
        frutas: ['manzana', 'pera', 'piña'],
        personas: [{
                nombre: 'mario',
                estado: 1
            }, {
                nombre: 'luis',
                estado: 0
            },
            {
                nombre: 'pedro',
                estado: 1
            },
        ],
        nueva_fruta: '',
        estado_nueva_fruta: 0,
        total: 0,
    },
    methods: {
        agregarfruta() {
            //console.log('clickkkkk');

            //cada vez que se quiera acceder a algun elemento de data se utiliza this
            this.personas.push({
                nombre: this.nueva_fruta,
                estado: this.estado_nueva_fruta
            });
            this.nueva_fruta = ""
            this.estado_nueva_fruta = 0
        }
    },
    computed: {
        sumarestados() {
            this.total = 0;

            for (persona of this.personas) {
                this.total = this.total + persona.estado;
            }
            return this.total;
        }
    }
})