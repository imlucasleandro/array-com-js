let elementos = [];

function adicionarElemento() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    
    // salvar os objetos com as suas propriedades
    let elemento = {
        nome: nome,
        sobrenome: sobrenome
    }
    elementos.push(elemento)

document.getElementById("nome").value = ""
document.getElementById("sobrenome").value = ""
atualizarTabela()
}

function atualizarTabela() {
    let tabela = document.getElementById("tabela")
    tabela.innerHTML = ""

    for (let i = 0; i  < elementos.length; i++) {
        let itemLista = document.createElement("li") 
        itemLista.innerHTML = elementos[i].nome + " " +
        elementos[i].sobrenome
        tabale.apprendChild(itemLista) 

    }
}

function removerElemento() {
    let indice = prompt("Digite o indice do elemento")
    array.splice(indice,1)
    atualizarTabela()
}