function ExcluirContato(li) {
    // Remove o contato (o pai do botão "Excluir")
    li.remove();
}

function CriarContato() {
    var Nome = document.getElementById("txtnome").value;
    var Telefone = document.getElementById("txttel").value;

    // Verifique se ambos os campos estão preenchidos
    if (Nome.trim() === "" || Telefone.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return; // Não faz nada se algum dos campos estiver vazio
    }

    // Crie um elemento de lista <li> para o contato
    const contato = document.createElement("li");
    const editarBotao = document.createElement("button");
    const excluirBotao = document.createElement("button");

    const nomeElement = document.createElement("span");
    nomeElement.className = "nome";
    nomeElement.textContent = `Nome: ${Nome}`;

    const telefoneElement = document.createElement("span");
    telefoneElement.className = "telefone";
    telefoneElement.textContent = `Telefone: ${Telefone}`;

    editarBotao.textContent = "Editar";
    excluirBotao.textContent = "Excluir";

    // Adicione o botão de edição ao contato
    editarBotao.addEventListener("click", function () {
        EditarContato(contato);
    });

    // Adicione o botão de exclusão ao contato
    excluirBotao.addEventListener("click", function () {
        ExcluirContato(contato);
    });

    // Adicione elementos ao contato
    contato.appendChild(nomeElement);
    contato.appendChild(telefoneElement);
    contato.appendChild(editarBotao);
    contato.appendChild(excluirBotao);

    // Encontre a lista de contatos (você precisa ter uma lista na sua página)
    const listaContatos = document.getElementById("lista-contatos");

    // Adicione o elemento de contato à lista de contatos
    listaContatos.appendChild(contato);

    // Limpe os campos após adicionar o contato
    document.getElementById("txtnome").value = "";
    document.getElementById("txttel").value = "";
}





// function FormataDados(input){
//     // // Formatação do telefone
//     // var numeroTelefone = input.value.replace(/\D/g, '');
//     // if (numeroTelefone.length > 11) {
//     //     numeroTelefone = numeroTelefone.substring(0, 11);
//     // }
//     // if (numeroTelefone.length >= 2) {
//     //     numeroTelefone = numeroTelefone.substring(0, 2) + " - " + numeroTelefone.substring(2);
//     // }
//     // if (numeroTelefone.length >= 9) {
//     //     numeroTelefone = numeroTelefone.substring(0, 9) + " - " + numeroTelefone.substring(9);
//     // }

//     // Formatação do nome
//     var nomeTelefone = document.getElementById("txtnome").value;
//     if (nomeTelefone.lenght > 10){
//         nomeTelefone = nomeTelefone.substring(0, 30);
//     }
// }



// function CriarContato(){
//     var Nome = document.getElementById("txtnome").value;
//     var Telefone = document.getElementById("txttel").value;

//     if (Nome.trim() === "" || Telefone.trim() === "") {
//         alert("Por favor, preencha todos os campos.");
//         return;
//     }
    
//     var contato = document.createElement("li");
//     contato.textContent = `Nome: ${Nome} | Telefone: ${Telefone}`;
    
//     var listaContatos = document.getElementById("lista-contatos");
    
//     listaContatos.appendChild(contato);
    
//     document.getElementById("txtnome").value = "";
//     document.getElementById("txttel").value = "";
// }