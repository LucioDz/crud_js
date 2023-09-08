
let nome = document.getElementById("nome")

let descricao = document.getElementById("descricao")

let servicos = [{ id: 0, nome: "troca de oleo", descricao: "" }]

/* Metodo para adionar os dados */
function adionarLinha(nom, desc) {

    id_servico = servicos.length + 1

    servicos.push({ id: id_servico, nome: nom, descricao: desc })

    corpo_tabela = document.getElementById("tabela")

    const tr = document.createElement("tr")

    tr.innerHTML =
        '<tr>' +
        '<td id="celula-nome'+id_servico+'" class="editar editarNome'+id_servico+'" contenteditable>' + nom + '</td>' +
        '<td class="editar editarDescricao'+id_servico+'" id="celula-descricao'+id_servico+'" contenteditable>' + desc + '</td>' +
        '<td class="col-acoes">' +
        '<div class="btn-group btn-group-sm" role="group" aria-label="Ações">' +
        '<button type="button" class="btn btn-primary editarB mx-1"><i class="bi bi-pen-fill editarB">Editar</i></button>' +
        '<button type="button" class="btn btn-danger deletar mx-1"><i class="bi bi-trash deletar"></i>Deletar</button>' +
        '</div>' +
        '</td>' +
        '</tr>'

    tr.setAttribute('data-id', id_servico);
    //adicionando linhas na tabela
    corpo_tabela.appendChild(tr)

    console.log(pegarServicos())

}

function EliminarLinhaNoArray(id) {

    let listaActulizada = servicos.filter((campo) => {
        return campo.id != Number(id)
    })

    servicos = listaActulizada;
}

function updateServico(id, nom, desc) {

    let listaActulizada = servicos.find((valor) => {
        return valor.id == Number(id)
    })

    listaActulizada.nome = nom
    listaActulizada.descricao = desc

}

function pegarServicos() {
    return servicos
}

Formulario = document.querySelector("#form_servico")

if (Formulario) {

    Formulario.addEventListener('submit', (evento) => {

        evento.preventDefault();
        console.log(nome.value.length)

        if (nome.value.length > 0) {
            adionarLinha(nome.value,descricao.value)
        }

    })

}

document.addEventListener('click' ,(evento) => {
   
     const elementosClicado = evento.target
     console.log(elementosClicado)

     if (elementosClicado.classList.contains('deletar')) {
        //recuperado o elemento pai mas proximo com a tag tr
        const ElementoPAi = elementosClicado.closest('tr');
        const id_elemento = ElementoPAi.getAttribute('data-id')
        EliminarLinhaNoArray(id_elemento);
        ElementoPAi.remove()
        console.log(pegarServicos())
     }

     if (elementosClicado.classList.contains('editarDescricao')) {
        //recuperado o elemento pai mas proximo com a tag tr
        const ElementoPAi = elementosClicado.closest('tr');
        //console.log(ElementoPAi)
        const id_elemento = ElementoPAi.getAttribute('data-id')

        const botaoEditar = linha.querySelector('.editarDescricao'+id_elemento+'');
        const botaoEditarNome = linha.querySelector('.editarNome'+id_elemento+'');
        
        botaoEditar.addEventListener('input', (evento) => {
            const desc = document.querySelector('#celula-descricao'+id_elemento+'').innerText;
            const Name = document.querySelector('#celula-nome'+id_elemento+'').innerText;
    
            updateServico(id_elemento,Name,desc)
    
        })

      
        console.log(pegarServicos())

     }
})

//EliminarLinhaNoArray(0)
//updateServico(3,"troca de pneus 3","denus danificados 3")

console.log(pegarServicos())