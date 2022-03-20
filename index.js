    var cod_clie = prompt(parseInt("Digite seu código de cliente: "));

    var tipo = prompt(parseInt("Digite um número para sua opção de poupança: "));

    var valor = prompt(parseInt("Digite um valor em R$ investido: "));

    valor = +valor;


    function tipoInvest(cod_clie,tipo,valor) {
        if (cod_clie == 0 || valor == 0 ){
            console.log("operação inválida ")
        } if (tipo == 1 && cod_clie > 0) {
            var taxa1 = 1.5 / 100;
            var juros = Math.ceil(valor * taxa1);
            var montante = parseInt(juros+valor);
            console.log("seu rendimento mensal de poupança: " + montante + " e valor de juros mensal: "+ juros);
        } if (tipo == 2 && cod_clie > 0) {
           var taxa2 = 2 / 100;
           var juros = Math.ceil(valor * taxa2);
           var montante = parseInt(juros+valor);
           console.log("seu rendimento mensal poupança-plus:  " + montante + " e valor de juros mensal: "+ juros);
        } if (tipo == 3 && cod_clie > 0) {
            var taxa3 = 4 / 100;
            var juros = Math.ceil(valor * taxa3);
            var montante = parseInt(juros+valor);
            console.log("seu rendimento mensal fundos de renda fixa: " + montante + " e valor de juros mensal: "+ juros);
        }else{
           
        }
    }
    tipoInvest(cod_clie,tipo,valor)