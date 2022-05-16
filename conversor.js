function converter(){
    let real = document.getElementById("valorDeEntrada").value;
    let select = document.getElementById("moedas");
    var opcaoValor = select.options[select.selectedIndex].value; 

    let dolar = 0.19
    let euro = 0.19
    let won = 251.11

    let resposta = document.getElementById("resposta");
    let conta 
    let valorSaida = `<input type="text" value="${conta}">`
    if (opcaoValor=="dolar"){
         conta = (real*dolar).toLocaleString('pt-BR',{style:'currency', currency:'USD'});

        valorSaida = `<input type="text" value="${conta}">`
        resposta.innerHTML=(valorSaida);
    } else if (opcaoValor=="euro"){
        conta = (real*euro).toLocaleString('pt-BR',{style: 'currency', currency:'EUR'})
         valorSaida = `<input type="text" value="${conta}">`
         resposta.innerHTML=(valorSaida);
    } else{
        conta = (real*won).toLocaleString('pt-BR',{style:'currency', currency:'KRW'})
       valorSaida = `<input type="text" value="${conta}">`
       resposta.innerHTML=(valorSaida);
    }
} 

function trocaTema(){
    document.body.classList.toggle("white")
}