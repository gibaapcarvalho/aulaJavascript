//Função para o botão
function botao(){
    //manipular o texto e formatação ao clicar no botão
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por pressionar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com.br/"); //nova aba
    window.location.href="http://www.hotmail.com/"; //mesma janela
}

//função chamando elemento
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("trocar texto");
}


//função com elemento referenciado
function trocar2(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar2(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //alert("trocar texto");
}

//onload
function carrega(){
    alert("Página carregada");
}

//on change
function funcaoChange(elemento){
    console.log(elemento.value);
}

//Funções
/*function soma(n1,n2){
    return n1 + n2;
}

//function substituiNome (frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}

function validaIdade (idade){
    var validar;
    if (idade>=18){
        validar = true;
    }else{
        validar = false;
    }

    return validar;
}

var idade = prompt("Digite sua idade");
console.log(validaIdade(idade));
*/

//alert(soma(5,10));
//alert(substituiNome("Meu nome era Giba","Giba","Gilberto"));

//condições e repetições
/*var idade = prompt("Qual sua idade?");
if (idade>=18){
    alert("Maior de idade");
}else{
    alert("De menor");
}*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
    //ou
    //count ++;
    
}*/

/*
var count;
for (count = 0; count <= 5; count++){
    alert (count);
};*/

/*
var d = new Date();
//alert(d);
//alert(d.getMonth()+1)
alert(d);
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*Dicionário
var valores = [{
    nome: "atributo1",
    valor: 1
},
{
    nome: "atributo2",
    valor: 2
}
]
console.log(valores);
alert(valores[1].valor);
*/

/* 1 valor
var valores = {
    nome: "atributo",
    valor: 1
}
console.log(valores.nome);
alert(valores.valor);
*/

//Array
//var lista = ["valor1", "valor2", "valor3"];
//lista.push("valor4");
//lista.pop();
//console.log(lista);
//console.log(lista[0]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - ")); //substituir as vírgulas pelo ítem dentro das aspas



/*var nome="Giba";
var idade = 35;
var idade2 = 15;
var frase = "Eu sou lindão"
//alert (nome + " tem " + idade + " anos") ;
//alert (idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toLowerCase());
//alert (frase.replace("Eu","Giba"));
*/