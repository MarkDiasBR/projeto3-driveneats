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
	let seletor = ".prato";

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

	verificarPedido()
}

let bebidaPedido;
let precoBebidaPedido;

function selecionarBebida(containerClicado) {
	let seletor = ".bebida";

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
	
	verificarPedido()
}

let sobremesaPedido;
let precoSobremesaPedido;

function selecionarSobremesa(containerClicado) {
	let seletor = ".sobremesa";

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
	
	verificarPedido()
}

function verificarPedido() {
	if (pratoPedido !== undefined && bebidaPedido !== undefined && sobremesaPedido !== undefined) {
		document.querySelector(".botao-confirmar-pedido").disabled = false;
		document.querySelector(".botao-confirmar-pedido").innerHTML = "Fechar pedido";
	} else {
		document.querySelector(".botao-confirmar-pedido").disabled = true;
		document.querySelector(".botao-confirmar-pedido").innerHTML = "Selecione os 3 itens <br>para fechar o pedido";
	}
}