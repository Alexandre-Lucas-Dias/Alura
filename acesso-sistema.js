const acesso = (nome) => {
    /*return*/ console.log(`${nome} logou com sucesso no sistema!`)
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    console.log(array)
    //return true;
  }
  
  const login = (pessoa/*, autentica*/) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(10)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(50)
    }
   /*return*/ acesso(pessoa.nome)
  }

  login({cargo: `diretoria`, nome: `Leia`}/*, autentica*/)