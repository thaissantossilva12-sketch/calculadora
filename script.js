function adicionar(valor) {
    document.getElementById("display").value += valor;
}

function limpar() {
    document.getElementById("display").value = "";
}

function calcular() {
    const display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch (erro) {
        display.value = "Erro";
    }
}