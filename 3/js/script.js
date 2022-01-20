function Ninja (nome){
    this.nome = nome;
    this.atirarShuriken = function(){
        console.log("Naruto atirou a shuriken");
    }
}

let naruto = new Ninja ('Naruto');


console.log(naruto);
naruto.atirarShuriken();