/*const servicos ={ 
     dados : [ { id:0 , nome :"troca de oleo" , descricao : ""} ] 
}
*/
let servicos = [ { id:0 , nome :"troca de oleo" , descricao : ""} ]

/* Metodo para adionar os dados */
function adionarLinha(nom,desc){
    
    id_servico = servicos.length + 1

    servicos.push({ id : id_servico , nome : nom, descricao : desc})

}

function EliminarLinhaNoArray(id){

    let listaActulizada =  servicos.filter((campo) => {
         return campo.id != Number(id)
    })

    servicos = listaActulizada;

}

function updateServico (id,nom,desc) {

  let listaActulizada = servicos.find((valor) =>{
      return valor.id == Number(id)
  })

  listaActulizada.nome = nom 
  listaActulizada.descricao = desc

}

function pegarServicos(){
    return servicos
}

adionarLinha("troca de pneus","denus danificados")
adionarLinha("troca de pneus","denus danificados")
EliminarLinhaNoArray(0)
updateServico(3,"troca de pneus 3","denus danificados 3")

console.log(pegarServicos())


