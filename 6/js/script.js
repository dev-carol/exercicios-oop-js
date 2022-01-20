function verificacao(objInimigo,objNinja){
  if(objInimigo instanceof objNinja){
   console.log("Este objeto " + objInimigo.nome + "É uma instancia de " + objInimigo.nome)
  }else{
   console.log("Este objeto " + objInimigo.nome + "NÃO é uma instancia de " + objInimigo.nome)
  }

}
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





 verificacao(naruto, Ninja);
 verificacao(orochimaru, Ninja);
