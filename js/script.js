let objetos = [
  {
    nome: "Italo",
    sobrenome: "Pedroza",
    idade: 21,
    esta_trabalhando: true,
    hobbies: ["escutar música", "dormir"]
  },
  {
    nome: "José",
    sobrenome: "da Silva",
    idade: 64,
    esta_trabalhando: false,
    hobbies: ["escutar música", "tricotar"]
  },{
    nome: "Marina",
    sobrenome: "Silva",
    idade: 43,
    esta_trabalhando: true,
    hobbies: ["falar merda", "f1"]
  }
]

console.log(objetos);
console.log('');

//converter o array de objeto em JSON
//MUITO util quando se quer enviar dados do JavaScript para uma API
const jsonData = JSON.stringify(objetos);
console.log(jsonData);




//convertendo JSON em objetos JavaScript
const objetoData =  JSON.parse(jsonData);
console.log(objetoData);




//percorrendo a lista com o método map
objetoData.map((pessoa)=>{
  console.log(pessoa.nome);
})