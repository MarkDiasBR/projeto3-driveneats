function desmarcaBotaoAnterior(seletor){
    // pegar o botão que foi selecionado anteriormente
    const botaoSelecionadoAnteriormente = document.querySelector(`${seletor}.selected`);

    // anter de remover a classe selecionado, verificar se o elemento não é null
    if (botaoSelecionadoAnteriormente !== null){
        // remover a classe selected desse botao
        botaoSelecionadoAnteriormente.classList.remove('selected');
    }
}

function selecionarPrato(containerClicado) {
	let seletor = ".prato";
	desmarcaBotaoAnterior(seletor);
	containerClicado.classList.toggle("selected");
}

function selecionarBebida(containerClicado) {
	let seletor = ".bebida";
	desmarcaBotaoAnterior(seletor);
	containerClicado.classList.add("selected");
}

function selecionarSobremesa(containerClicado) {
	let seletor = ".sobremesa";
	desmarcaBotaoAnterior(seletor);
	containerClicado.classList.toggle("selected");
}

