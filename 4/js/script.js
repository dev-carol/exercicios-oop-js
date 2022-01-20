function Ninja (nome,quantidadeShuriken){
    this.nome = nome;
    this.quantidadeShuriken = quantidadeShuriken;
    this.atirarShuriken = function(){
        if(this.quantidadeShuriken > 0){
            console.log("Naruto atirou a shuriken");
            this.quantidadeShuriken -= 1

        }else{
            console.log("O ninja não tem mais shuriken")
        }
    }
}

let naruto = new Ninja ('Naruto', 3);


console.log(naruto);
naruto.atirarShuriken();
console.log(naruto);
naruto.atirarShuriken();
console.log(naruto);
naruto.atirarShuriken();
console.log(naruto);

