const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   delete objPersonagem.aliado
delete objPersonagem["status"]
 
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem);
const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]
 
console.log(delProp) //true
console.log(delPropInexistente) //true

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };
  
  console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
  );
  
  const chaves = ["nome", "idade", "cpf", "email", "altura"];
  
  chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
  });

  const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };
  
  console.log(pessoa.nome);
  
  console.log(pessoa.telefone);
  
  pessoa.telefone = "11 2223333444";
  
  console.log(pessoa.telefone);
  
  pessoa.nome = "Luma Silva";
  
  console.log(pessoa);
  
  const novaPessoa = {
    nome: "Pedro",
  };
  
  //pessoa = novaPessoa; // isso dá erro