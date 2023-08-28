function ExcluirContato(li) {
    li.remove();
}

function CriarContato() {
    var Nome = document.getElementById("txtnome").value;
    var Telefone = document.getElementById("txttel").value;
    var contato = document.createElement("li");

    var nomeElement = document.createElement("span");
    nomeElement.className = "nome";
    nomeElement.textContent = `Nome: ${Nome}`;

    var numeroTelefone = document.createElement("span");
    numeroTelefone.className = "telefone";
    numeroTelefone.textContent = `| Telefone: ${Telefone}`;

    contato.nomeElement = nomeElement;
    contato.numeroTelefone = numeroTelefone;

    var editarBotao = document.createElement("button");
    var excluirBotao = document.createElement("button");

    var editarImagem = document.createElement("img");
    editarImagem.src = "./Imagens/editar.png";
    editarImagem.style.width = "40px";
    editarImagem.style.height = "40px";

    var excluirImagem = document.createElement("img");
    excluirImagem.src = "./Imagens/lixeira.png";
    excluirImagem.style.width = "40px";
    excluirImagem.style.height = "40px";

    editarBotao.appendChild(editarImagem);
    excluirBotao.appendChild(excluirImagem);

    editarBotao.addEventListener("click", function () {
        EditarContato(contato);
    });

    excluirBotao.addEventListener("click", function () {
        ExcluirContato(contato);
    });

    contato.appendChild(nomeElement);
    contato.appendChild(numeroTelefone);
    contato.appendChild(editarBotao);
    contato.appendChild(excluirBotao);

    var listaContatos = document.getElementById("lista-contatos");

    listaContatos.appendChild(contato);

    document.getElementById("txtnome").value = "";
    document.getElementById("txttel").value = "";
}

function EditarContato(contato) {
    var novoNome = prompt("Novo nome:", contato.nomeElement.textContent.replace("Nome: ", ""));
    var novoTelefone = prompt("Novo telefone:", contato.numeroTelefone.textContent.replace("| Telefone: ", ""));

    if (novoNome !== null && novoTelefone !== null) {
        contato.nomeElement.textContent = `Nome: ${novoNome}`;
        contato.numeroTelefone.textContent = `| Telefone: ${novoTelefone}`;
    }
}
