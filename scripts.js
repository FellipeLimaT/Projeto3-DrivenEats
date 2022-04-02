//global

let prato;
let bebida;
let sobremesa;

function selecionarPrato(pratoSelecionado){
    const produtoSelecionado = document.querySelector(".selecionado");
    if (produtoSelecionado !== null) {
        produtoSelecionado.classList.remove("selecionado");
    }

    pratoSelecionado.classList.add("selecionado");
    prato = pratoSelecionado.innerHTML;

    if (prato && bebida && sobremesa) {
        document.querySelector(".botao-pedido").classList.add("escondido");
        document.querySelector(".botao-pedido-final").classList.remove("escondido");
    }
}

function selecionarBebida(bebidaSelecionado){
    bebida = bebidaSelecionado.innerHTML;

    const produtoSelecionado = document.querySelector(".bebida").querySelector(".selecionado");
    if (produtoSelecionado !== null) {
        produtoSelecionado.classList.remove("selecionado");
    }

    bebidaSelecionado.classList.add("selecionado");
    bebida = bebidaSelecionado.innerHTML;

    if (prato && bebida && sobremesa) {
        document.querySelector(".botao-pedido").classList.add("escondido");
        document.querySelector(".botao-pedido-final").classList.remove("escondido");
    }
}

function selecionarSobremesa(sobremesaSelecionado){
    sobremesa = sobremesaSelecionado.innerHTML;
    
    const produtoSelecionado = document.querySelector(".sobremesa").querySelector(".selecionado");
    if (produtoSelecionado !== null) {
        produtoSelecionado.classList.remove("selecionado");
    }

    sobremesaSelecionado.classList.add("selecionado");
    sobremesa = sobremesaSelecionado.innerHTML;

    if (prato && bebida && sobremesa) {
        document.querySelector(".botao-pedido").classList.add("escondido");
        document.querySelector(".botao-pedido-final").classList.remove("escondido");
    }

}

function botaoWhatsapp(){
    
    let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${document.querySelector(".box-prato").querySelector(".titulo-prato").innerText}
    - Bebida: ${document.querySelector(".box-bebida").querySelector(".titulo-bebida").innerText}
    - Sobremesa: ${document.querySelector(".box-sobremesa").querySelector(".titulo-sobremesa").innerText}
    Total:

    Nome: ${prompt("Digite seu nome: ")}
    Endereço: ${prompt("Digite seu endereço: ")}
    `

    mensagem = window.encodeURIComponent(mensagem);    
    windown.open ("https://wa.me/5531994310616?text=" + mensagem);
}

