function Ninja (nome,quantidadeShuriken){
    this.nome = nome;
    this.quantidadeShuriken = quantidadeShuriken;
    this.atirarShuriken = function(inimigo){
        if(this.quantidadeShuriken > 0){
            console.log("Naruto atirou a shuriken");
            this.quantidadeShuriken -= 1
           inimigo.vivo = false;
        }else{
            console.log("O ninja não tem mais shuriken")
        }
        
    }
}


function Inimigo (nome){
    this.nome = nome;
    this.vivo = true;
}

 let naruto = new Ninja ('Naruto',3);

 let orochimaru = new Inimigo ('Orochimaru');

console.log(naruto);
console.log(orochimaru);

naruto.atirarShuriken(orochimaru);

console.log(orochimaru);

