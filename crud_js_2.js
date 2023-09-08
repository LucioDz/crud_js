
let nome_campo = document.getElementById("nome")

let descricao_campo = document.getElementById("descricao")

let servicos = [{ id: 0, nome: "troca de oleo", descricao: "" }]

/* Metodo para adionar os dados */
function adionarLinha(nom, desc) {

    id_servico = servicos.length + 1

    servicos.push({ id: id_servico, nome: nom, descricao: desc })

    corpo_tabela = document.getElementById("tabela")

    const tr = document.createElement("tr")

    tr.innerHTML =
        '<tr>' +
        '<td id="celula-nome" class="editar editarNome" contenteditable>' + nom + '</td>' +
        '<td class="editar editarDescricao" id="celula-descricao" contenteditable>' + desc + '</td>' +
        '<td class="col-acoes">' +
        '<div class="btn-group btn-group-sm" role="group" aria-label="Ações">' +
        '<button type="button" class="btn btn-primary editar editarB mx-1">Editar</button>' +
        '<button type="button" class="btn btn-danger deletar mx-1">Deletar</button>' +
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
        console.log(nome_campo.value.length)

        if (nome.value.length > 0) {
            adionarLinha(nome_campo.value,descricao_campo.value)
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

     if (elementosClicado.classList.contains('editar')) {

        //console.log(elementosClicado);

        const linhasTabela = document.querySelectorAll('tr[data-id]');

        var idLinhaSelecionada;

        linhasTabela.forEach((linha) => {

            const celulaEditar = linha.querySelector('.editarDescricao');
            const celulaEditarNome = linha.querySelector('.editarNome');
            const botaoActulizar = document.querySelector('#Actulizar');
            const botaoAdcionar = document.querySelector('#Adcionar');

            const botaoEditar = linha.querySelector('.editarB');

            botaoEditar.addEventListener('click', (evento) => {
                idLinhaSelecionada = linha.getAttribute('data-id');
                console.log(idLinhaSelecionada);

                const descricao = linha.querySelector('#celula-descricao').innerText;
                const nome = linha.querySelector('#celula-nome').innerText;
                nome_campo.value = nome
                descricao_campo.value = descricao
                botaoActulizar.classList.remove("d-none")
                botaoActulizar.classList.add("d-block")
                botaoAdcionar.classList.add("d-none")

                botaoActulizar.addEventListener('click', (evento) => {

                    linha.querySelector('#celula-descricao').innerText = descricao_campo.value;
                    
                    linha.querySelector('#celula-nome').innerText = nome_campo.value;

                    updateServico(idLinhaSelecionada,nome_campo.value, descricao_campo.value)
                  
                    console.log(pegarServicos())
                });
    
            });

            celulaEditar.addEventListener('input', (evento) => {
                idLinhaSelecionada = linha.getAttribute('data-id');
                console.log(idLinhaSelecionada);
                const descricao = linha.querySelector('#celula-descricao').innerText;
                const nome = linha.querySelector('#celula-nome').innerText;
                nome_campo.value = nome
                descricao_campo.value = descricao
                updateServico(idLinhaSelecionada, nome, descricao)
                console.log(pegarServicos())

            });

            celulaEditarNome.addEventListener('input', (evento) => {
                idLinhaSelecionada = linha.getAttribute('data-id');
                console.log(idLinhaSelecionada);
                const descricao = linha.querySelector('#celula-descricao').innerText;
                const nome = linha.querySelector('#celula-nome').innerText;
                nome_campo.value = nome
                descricao_campo.value = descricao
                updateServico(idLinhaSelecionada, nome, descricao)
                console.log(pegarServicos())

            });

        });
       
    }
})

//EliminarLinhaNoArray(0)
//updateServico(3,"troca de pneus 3","denus danificados 3")

console.log(pegarServicos())