//global

let prato;
let bebida;
let sobremesa;

let nomePrato;
let nomeBebida;
let nomeSobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;
let precoTotal;

function selecionarPrato(pratoSelecionado){
    const produtoSelecionado = document.querySelector(".prato").querySelector(".selecionado");
    if (produtoSelecionado !== null) {
        produtoSelecionado.classList.remove("selecionado");
    }

    pratoSelecionado.classList.add("selecionado");
    

    nomePrato = pratoSelecionado.getElementsByTagName("p")[0].textContent;
    precoPrato = pratoSelecionado.getElementsByTagName("p")[2].textContent;
    precoPrato = parseFloat(precoPrato.replace(',', '.').replace('R$', ''));
    
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
    nomeBebida = bebidaSelecionado.getElementsByTagName("p")[0].textContent;
    precoBebida = bebidaSelecionado.getElementsByTagName("p")[2].textContent;
    precoBebida = parseFloat(precoBebida.replace(',', '.').replace('R$', ''));

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
    nomeSobremesa = sobremesaSelecionado.getElementsByTagName("p")[0].textContent;
    precoSobremesa = sobremesaSelecionado.getElementsByTagName("p")[2].textContent;
    precoSobremesa = parseFloat(precoSobremesa.replace(',', '.').replace('R$', ''));

    sobremesa = sobremesaSelecionado.innerHTML;

    if (prato && bebida && sobremesa) {
        document.querySelector(".botao-pedido").classList.add("escondido");
        document.querySelector(".botao-pedido-final").classList.remove("escondido");
    }

}

    

function gerarConfirmacao(){   

    precoTotal = precoPrato + precoBebida + precoSobremesa;
    precoTotal = precoTotal.toFixed(2);   
   
    document.querySelector(".etapa-confirmacao").classList.remove("escondido");
    document.querySelector(".prato-final").innerHTML = `${nomePrato}`;
    document.querySelector(".preco-prato-final").innerHTML = `${precoPrato}`;
    document.querySelector(".bebida-final").innerHTML = `${nomeBebida}`;
    document.querySelector(".preco-bebida-final").innerHTML = `${precoBebida}`;
    document.querySelector(".sobremesa-final").innerHTML = `${nomeSobremesa}`;
    document.querySelector(".preco-sobremesa-final").innerHTML = `${precoSobremesa}`;
    document.querySelector(".preco-final").innerHTML = `${precoTotal}`; 

}

function gerarWhatsapp(){
    

    let mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}    
Total: R$ ${precoTotal}

Nome: ${prompt("Digite seu nome: ")}
Endereço: ${prompt("Digite seu endereço: ")}
    `;

    mensagem = window.encodeURIComponent(mensagem);    
    window.open ("https://wa.me/5531994310616?text=" + mensagem);
}

function cancelarPedido(){
    document.querySelector(".etapa-confirmacao").classList.add("escondido");
}
