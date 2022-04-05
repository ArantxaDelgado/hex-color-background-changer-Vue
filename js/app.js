// Implementar solución aquí

Vue.createApp({
    data() {
        return {
            bgColor: '#FFFFFF'
        }
    },
    methods: {
        updateRandomColor() {
            const color = this.generateRandomColor();
            this.bgColor = color;
        },
        generateRandomColor() {
            const red = Math.floor(Math.random() * 255);
            const green = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            return(`rgb(${red}, ${green}, ${blue})`);
        }
    }
}).mount('#app')
