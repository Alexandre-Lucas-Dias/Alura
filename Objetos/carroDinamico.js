const carro = {
    marca: "Chevrolet",
    modelo: "Corsa",
    ano: 2001,
    cor: "cinza",
    ligado: true,
    ligar: function(){
        if (!this.ligado) {
            this.ligado = true;
            console.log('O carro está ligado.');
        } else {
            console.log('O carro já está ligado.');
        }
    },
    desligar: function(){
        if (this.ligado) {
            this.ligado = false;
            console.log('O carro está desligado.');
          } else {
            console.log('O carro já está desligado.');
        }
    },
    obterDetalhes: function(){
        const estado = this.ligado ? 'ligado' : 'desligado';
        return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
};

carro.ligar(); // Tentar ligar o carro quando já está ligado
carro.desligar(); // Desligar o carro
carro.desligar(); // Tentar desligar o carro quando já está desligado
carro.ligar(); // Ligar o carro
console.log(carro.obterDetalhes());