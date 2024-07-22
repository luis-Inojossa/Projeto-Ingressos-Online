function comprar(){
    let tipoIngresso = document.getElementById ('tipo-ingresso');
    let quantidadeIngressos = parseInt(document.getElementById('qtd').value);
   if (tipoIngresso.value == 'pista'){
        comprarPista(quantidadeIngressos);
   }else if (tipoIngresso.value == 'superior') {
    comprarSuperior(quantidadeIngressos);
} else {
    comprarInferior(quantidadeIngressos);
}
}

function comprarPista(quantidadeIngressos) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeIngressos > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - quantidadeIngressos;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarSuperior(quantidadeIngressos) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeIngressos > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - quantidadeIngressos;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }

}
function comprarInferior(quantidadeIngressos) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeIngressos> qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - quantidadeIngressos;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}