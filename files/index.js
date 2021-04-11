/*

@ arquivo: index.js
@ autor: Gabriel Siqueira Werneck (gswerneck2000@gmail.com)
@ descricao: Segunda etapa do processo seletivo para a vaga de Estagio em Desenvolvimento de Software, no Instituto CERTI Sapientia

Servidor HTTP que, para cada requisicao GET, retorna um JSON cuja chave extensao seja a versao por extenso do numero inteiro enviado no path.
Intervalo de numeros: [-99999, 99999]

*/

const express = require('express');
const server = express();
const PORT = 3000;
const HOST = '0.0.0.0';

server.get('*' , (req, res) => {

    /* 
    - ARRAYS COM STRINGS DE NUMEROS EM EXTENSO, CATALOGADOS EM UNIDADE, DEZENA E CENTENA. 
    - AS STRINGS VAZIAS SERVEM PARA FACILITAR O USO DO ARRAY, DEIXANDO OS VALORES EM ORDEM. 
    */

    var unidade = [
        "", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"
    ];
    var dezena = [
        "","", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"
    ];
    var centena = [
        "cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"
    ];

    /* 
    - FUNCOES PARA TRANSFORMAR O NUMERO DIGITADO EM EXTENSO, DE ACORDO COM A QUANTIDADE DE DIGITOS.
    - PARA QUE O CÓDIGO FIQUE MENOS EXTENSO, UMA FUNCAO CHAMA A OUTRA.
    */

    function digito_2 (num) {
        num = num.replace(/^0+/, '');
        let num_ext = '';
        if (num == '') {
            num_ext += 'zero';
        }
        else if (num <= 19) {
            num_ext += unidade[num];
        }
        else {
            num_ext += dezena[num[0]];
            if(num[1] != 0) {
                num_ext += ' e ';
                num_ext += unidade[num[1]];
            }  
        }
        return num_ext;
    }
    function digito_3 (num) {
        num = num.replace(/^0+/, '');
        let num_ext = '';
        let num_dzn = '';
        if (num == 0){
            return 'zero';
        }
        else if (num.length > 2) {
            num_dzn = digito_2(num.slice(1));
            if (num_dzn == 'zero') {
                num_ext += centena[0];
                return num_ext;
            }
            num_ext += centena[num[0]];
            num_ext += ' e ';
            num_ext += num_dzn;
            return num_ext;
        }
        else {
            num_dzn = digito_2(num);
            if (num_dzn == 'zero') {
                num_ext += centena[0];
                return num_ext;
            }
            else{
                num_ext += num_dzn;
                return num_ext;
            } 
        } 
    }
    function digito_4 (num) {
        num = num.replace(/^0+/, '');
        let num_ext = '';
        let num_ctn = digito_3(num.slice(1));
        if (num == 0) {
            return 'zero';
        }
        if (num[0] == 1){
            num_ext += 'mil';
        }
        else {
            num_ext += unidade[num[0]];
            num_ext += ' mil';
        }
        if (num_ctn == 'zero') {
            return num_ext;
        }
        else {
            num_ext += ' e ';
            num_ext += num_ctn;
        }
        return num_ext;
    }
    function digito_5 (num) {
        let num_m = num.slice(0, 2);
        let num_c = num.slice(2);
        let ext_m = '';
        let ext_c = '';
        let num_ext = '';
        ext_m += digito_2(num_m);
        num_ext += ext_m;
        num_ext += ' mil';
        if (num_c == 0){
            return num_ext;
        }
        else{
            ext_c += digito_3(num_c);
            num_ext += ' e ';
            num_ext += ext_c;
            return num_ext;
        }
    }

    var entrada = req.url.slice(1); /* GUARDANDO O VALOR DO GET EM UMA VARIAVEL E ELIMINANDO A "/" DA STRING */
    var numero_por_extenso = '';
    
    /*
    - ENTRADAS INVALIDAS: 
        -> GET VAZIO
        -> VALOR MAIOR QUE 99999 (NOVENTA E NOVE MIL NOVECENTOS E NOVENTA E NOVE)
        -> VALOR MENOR QUE -99999 (MENOS NOVENTA E NOVE MIL NOVECENTOS E NOVENTA E NOVE)
        -> VALOR NAO INTEIRO
    */
   var validacao = 0
    for (let i=0; i < entrada.length; i++) {
        if (entrada[i] != '0' && entrada[i] != '1' && entrada[i] != '2' && entrada[i] != '3' && entrada[i] != '4' && entrada[i] != '5' && entrada[i] != '6' && entrada[i] != '7' && entrada[i] != '8' && entrada[i] != '9' && entrada[i] != '-') {
            validacao++;
        }
    }

    if(entrada > 99999 || entrada < -99999 || entrada == '' || validacao != 0) {
        numero_por_extenso += 'numero invalido';
    }

    /*
    - APOS A VALIDACAO DO NUMERO, SAO ESTABELECIDAS CONDICOES DE ACORDO COM A QUANTIDADE DE DIGITOS,
      PARA QUE SEJA CHAMADA A FUNCAO ADEQUADA. 
    */

    else if (entrada == 0) {
        numero_por_extenso += 'zero';
    } 
    else {
        entrada = entrada.replace(/^0+/, '');
        if (entrada[0] == '-') {
            numero_por_extenso += 'menos ';
            entrada = entrada.slice(1);
        }
        if (entrada.length == 1) {      
            numero_por_extenso += unidade[entrada];
        }
        else if (entrada.length == 2) {      
            numero_por_extenso += digito_2(entrada);
        }
        else if (entrada.length == 3) {      
            numero_por_extenso += digito_3(entrada);
        }
        else if (entrada.length == 4) {
            numero_por_extenso += digito_4(entrada);
        }
        else if (entrada.length == 5) {
            numero_por_extenso += digito_5(entrada);
        }
    }

    /* RETORNO DE UMA CHAVE EM JSON COM UMA STRING INDICANDO O VALOR DO DIGITO EM EXTENSO */

    var extenso = {"extenso":numero_por_extenso};
    res.json(extenso);
}) 

/* NO CONSOLE IRAM APARECER INFORMACOES SOBRE O SERVIDOR E COMO DESATIVA-LO */

server.listen(PORT, HOST, () => {
    console.log('Servidor funcionando em http://localhost:3000');
    console.log('Pressione ctrl+c para desligar o servidor.');
})