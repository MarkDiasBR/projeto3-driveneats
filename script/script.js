function desmarcaBotaoAnterior(seletor){
    // pegar o botão que foi selecionado anteriormente
    const botaoSelecionadoAnteriormente = document.querySelector(`${seletor}.selected`);

    // anter de remover a classe selecionado, verificar se o elemento não é null
    if (botaoSelecionadoAnteriormente !== null){
        // remover a classe selected desse botao
        botaoSelecionadoAnteriormente.classList.remove('selected');
    }
}

let pratoPedido;
let precoPratoPedido;

function selecionarPrato(containerClicado) {
    const seletor = ".prato";

    if (pratoPedido === undefined && precoPratoPedido === undefined) {
        containerClicado.classList.add("selected");
        pratoPedido = document.querySelector(".prato.selected .nomePrato").innerHTML;
        precoPratoPedido = document.querySelector(".prato.selected .precoPrato").innerHTML;
    } else {
        if (containerClicado.classList.contains("selected")) {
            containerClicado.classList.remove("selected");
            pratoPedido = undefined;
            precoPratoPedido = undefined;
        } else {
            desmarcaBotaoAnterior(seletor);
            containerClicado.classList.add("selected");
            pratoPedido = document.querySelector(".prato.selected .nomePrato").innerHTML;
            precoPratoPedido = document.querySelector(".prato.selected .precoPrato").innerHTML;
        }
    }

    verificarPedido();
}

let bebidaPedido;
let precoBebidaPedido;

function selecionarBebida(containerClicado) {
    const seletor = ".bebida";

    if (bebidaPedido === undefined && precoBebidaPedido === undefined) {
        containerClicado.classList.add("selected");
        bebidaPedido = document.querySelector(".bebida.selected .nomeBebida").innerHTML;
        precoBebidaPedido = document.querySelector(".bebida.selected .precoBebida").innerHTML;
    } else {
        if (containerClicado.classList.contains("selected")) {
            containerClicado.classList.remove("selected");
            bebidaPedido = undefined;
            precoBebidaPedido = undefined;
        } else {
            desmarcaBotaoAnterior(seletor);
            containerClicado.classList.add("selected");
            bebidaPedido = document.querySelector(".bebida.selected .nomeBebida").innerHTML;
            precoBebidaPedido = document.querySelector(".bebida.selected .precoBebida").innerHTML;
        }
    }

    verificarPedido();
}

let sobremesaPedido;
let precoSobremesaPedido;

function selecionarSobremesa(containerClicado) {
    const seletor = ".sobremesa";

    if (sobremesaPedido === undefined && precoSobremesaPedido === undefined) {
        containerClicado.classList.add("selected");
        sobremesaPedido = document.querySelector(".sobremesa.selected .nomeSobremesa").innerHTML;
        precoSobremesaPedido = document.querySelector(".sobremesa.selected .precoSobremesa").innerHTML;
    } else {
        if (containerClicado.classList.contains("selected")) {
            containerClicado.classList.remove("selected");
            sobremesaPedido = undefined;
            precoSobremesaPedido = undefined;
        } else {
            desmarcaBotaoAnterior(seletor);
            containerClicado.classList.add("selected");
            sobremesaPedido = document.querySelector(".sobremesa.selected .nomeSobremesa").innerHTML;
            precoSobremesaPedido = document.querySelector(".sobremesa.selected .precoSobremesa").innerHTML;
        }
    }

    verificarPedido();
}

function verificarPedido() {
    const classeBotao = ".botao-confirmar-pedido";
    if (pratoPedido !== undefined && bebidaPedido !== undefined && sobremesaPedido !== undefined) {
        document.querySelector(classeBotao).disabled = false;
        document.querySelector(classeBotao).innerHTML = "Fechar pedido";
    } else {
        document.querySelector(classeBotao).disabled = true;
        document.querySelector(classeBotao).innerHTML = "Selecione os 3 itens <br>para fechar o pedido";
    }
}

const classeBotaoFechar = "fechar-pedido";

function finalizarPedido() {
    document.querySelector(".confirmaPrato").innerHTML = pratoPedido;
    document.querySelector(".confirmaPrecoPrato").innerHTML = precoPratoPedido;

    document.querySelector(".confirmaBebida").innerHTML = bebidaPedido;
    document.querySelector(".confirmaPrecoBebida").innerHTML = precoBebidaPedido;

    document.querySelector(".confirmaSobremesa").innerHTML = sobremesaPedido;
    document.querySelector(".confirmaPrecoSobremesa").innerHTML = precoSobremesaPedido;

    let precoTotal = Number(precoPratoPedido.replace("R$ ", "").replace(",","."));

    precoTotal += Number(precoBebidaPedido.replace("R$ ", "").replace(",",".")) + Number(precoSobremesaPedido.replace("R$ ", "").replace(",","."));

    const quantidadeDecimais = 2;
    precoTotal = "R$ "+ precoTotal.toFixed(quantidadeDecimais).replace(".", ",");

    document.querySelector(".confirmaPrecoTotal").innerHTML = precoTotal;

    document.querySelector(".background").classList.add(classeBotaoFechar);
    document.body.classList.add(classeBotaoFechar);
}

function cancelarPedido() {
    document.querySelector(".background").classList.remove(classeBotaoFechar);
    document.body.classList.remove(classeBotaoFechar);
}

let precoFinal;

function enviarPedido() {
    const nomeCliente = prompt("Qual o seu nome?");
    const enderecoCliente = prompt("Qual o endereço de entrega?");

    precoFinal = document.querySelector(".confirmaPrecoTotal").innerHTML;

    const textoWhatsApp = `Olá, gostaria de fazer o pedido:
    - Prato: ${pratoPedido}
    - Bebida: ${bebidaPedido}
    - Sobremesa: ${sobremesaPedido}
    Total: ${precoFinal}


    Nome: ${nomeCliente}
    Endereço: ${enderecoCliente}`;
    window.open("https://wa.me/5571996597302?text=" + encodeURIComponent(textoWhatsApp));
}