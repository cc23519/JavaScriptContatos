function EditarContato(li) {
    var nomeElement = li.querySelector(".nome");
    var telefoneElement = li.querySelector(".telefone");

    var nomeAntigo = nomeElement.textContent.replace("Nome: ", "");
    var telefoneAntigo = telefoneElement.textContent.replace("Telefone: ", "");

    var novoNome = prompt("Novo Nome:", nomeAntigo);
    var novoTelefone = prompt("Novo Telefone:", telefoneAntigo);

    if (novoNome !== null && novoTelefone !== null) {
        nomeElement.textContent = `Nome: ${novoNome} `;
        telefoneElement.textContent = ` Telefone: ${novoTelefone}`;
    }
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
    var contato = document.createElement("li");
    var editarBotao = document.createElement("button");

    var nomeElement = document.createElement("span");
    nomeElement.className = "nome";
    nomeElement.textContent = `Nome: ${Nome} `;

    var telefoneElement = document.createElement("span");
    telefoneElement.className = "telefone";
    telefoneElement.textContent = ` Telefone: ${Telefone}`;

    editarBotao.textContent = "Editar";

    // Adicione o botão de edição ao contato
    editarBotao.addEventListener("click", function () {
        EditarContato(contato);
    });

    // Adicione elementos ao contato
    contato.appendChild(nomeElement);
    contato.appendChild(telefoneElement);
    contato.appendChild(editarBotao);

    // Encontre a lista de contatos (você precisa ter uma lista na sua página)
    var listaContatos = document.getElementById("lista-contatos");

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