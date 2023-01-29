const lista= new Array(`São Paulo`, `Rio de Janeiro`, `Salvador`);
const idadeCompra= 18;
const estaAcompanhada= false;
let temPassagem= false;
const destino= `São Paulo`;
let contador= 0;
let destinoExiste= false;
console.log(lista);

const podeComprar= idadeCompra>=18 || estaAcompanhada ==  true ;

while(contador<3){
if(lista[contador]== destino){
   destinoExiste=true;
   break;
}
else{
    destinoExiste=false;
}
contador+=1;
}
console.log("destino existe: "+destinoExiste);

console.log("embarque \n\n");
if(podeComprar && destinoExiste){
    console.log("boa viagem");
}
else{
 console.log("voce nao pode embarcar");
}
