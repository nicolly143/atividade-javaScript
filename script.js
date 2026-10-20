
nome = "Aprovacao ou desaprovacao escolar"
console.log("Aprovacao ou desaprovacao escolar")

let aprovaçãoEscola = 7


if  (aprovaçãoEscola >=6 ){
    console.log("Você foi aprovado")
}else {
    console.log("Você foi reprovado")
}

nome2 = "comparacao de dois numeros"
console.log("comparacao de dois numeros")

let numero1 = 1
let numero2 = 4
if(numero2 > numero1){
    console.log("você perdeu!")
}else if (numero2 > numero1){
console.log("numero2 maior")   
}else{
 console.log("embate")
}











nome3 = "Verificacao de senha"
console.log("Verificacao de senha")

const senha_senai =  "senai123"
if(senha_senai == "senai123"){
    console.log("Acesso autorizado")
}else{
    console.log("senha Incorreta")
}








let graus = 18

if (graus < 16) {
    console.log("Frio");
} else if (graus >= 16 && graus <= 25) {
    console.log("Moderado");
} else {
    console.log("Quente");
}





let nota=10
if(nota>=9){
    console.log("excelente")
}else if(nota>=7){
console.log("bom")
} else if(nota>=5){
    console.log("regular")

} else{
    console.log("Insuficiente")
}






const data = 6

if (data ==1){
    console.log("segunda")
    
}else if(data==2){
    console.log("terça")
}else if(data==3){
    console.log("quarta")
}else if(data==4){
    console.log("quinta")
}else if(data==5){
    console.log("sexta")
}else if(data==6){
    console.log("sábado")
}else if(data==7){
    console.log("domingo")
}
 

//1

let numero01 = 67

 
if(numero01 > 10 && numero01  < 50){
  console.log("Seu numero está entre o intervalo"); 
}else{
   console.log("seu numero está fora do intrvalo");
}


//2 — Elegibilidade para estágio
//Uma oportunidade de estágio é destinada a candidatos com idade entre 16 e 24 anos, inclusive. Receba a idade e informe se o candidato atende ao requisito.

let candidato = 23

if(candidato > 16 && candidato < 24){
console.log("você atende ao requisito")
}else{
 console.log("Você não atende ao requisito")
}


//03 — Frete grátis
//Uma loja oferece frete grátis para clientes que realizam compras de R$ 200 ou mais ou que são assinantes. e Receba o valor da compra e uma variável booleana indicando se o cliente é assinante. Informe se ele tem direito ao frete grátis.


let clientes = 152
let assinante = true
if(clientes >=200 || assinante){
    console.log("você é assinante e tem direito ao frete gratis")
}else{
    console.log("você não tem direito ao frete gratis")
}





//04 — Dia de descanso
//Receba o nome de um dia da semana. Se for sábado ou domingo, exiba "Fim de semana". Caso contrário, exiba "Dia útil".



let  diadasemana = "Domingo"

if(diadasemana == "Sabado" ||diadasemana =="Domingo"){
    console.log("Fim de semana")
}else{
    console.log("Dia útil")
}


//05 — Promoção especial
//Uma loja aplica 15% de desconto se o cliente:
//Realizar uma compra de R$ 150 ou mais e for assinante;
//  ou
//Possuir um cupom promocional válido, independentemente de ser assinante.
//Receba o valor da compra e duas variáveis booleanas (assinante e cupom válido). Informe se o desconto será aplicado e apresente o total final.

let desconto = 200
let assinantes = true
if(desconto >=150 || assinantes == true){
    console.log("desconto aplicado")
}else{
    console.log("desconto não aplicado")
}