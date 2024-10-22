// Exercício 1

const livro = {
    titulo: "Bíblia Sagrada",
    autor: "vários",
    anoPublicacao: 66,
    genero: "fé"
}

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}`);

// Exercício 2

const anoAtual = new Date().getFullYear()

const livro2 = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    anoPublicacao: 2000,
    genero: "fantasia",
    idadePublicacao: 0
}

livro2.idadePublicacao = anoAtual - livro2.anoPublicacao
const mostrarDetalhes = `Detalhes do segundo Livro: 
Título: ${livro2.titulo} 
Autor: ${livro2.autor} 
Ano de Publicação: ${livro2.anoPublicacao} 
Gênero: ${livro2.genero}
Idade de Publicação: ${livro2.idadePublicacao} anos`

console.log(mostrarDetalhes);

// Exercício 3

const livro3 = {
    titulo: "Realidade Quantificada",
    autor: "Alexandre",
    anoPublicacao: 2022,
    genero: "ciência",
    idadePublicacao: 0
}

livro3.idadePublicacao = anoAtual - livro3.anoPublicacao

console.log(`Detalhes do terceiro livro:
Título: ${livro3["titulo"]} 
Autor: ${livro3["autor"]} 
Ano de Publicação: ${livro3["anoPublicacao"]} 
Gênero: ${livro3["genero"]}
Idade de Publicação: ${livro3["idadePublicacao"]} anos 
`);

// Exercício 4

const livro4 = {
    titulo: "As Tranças da Vovó Careca",
    autor: "Fulano",
    anoPublicacao: 2023,
    genero: "Piada",
    idadePublicacao: 0,
    avaliacao: null
}

livro4.idadePublicacao = anoAtual - livro4.anoPublicacao

const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro4.avaliacao === null) {
    livro4.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");
}

console.log(`Detalhes do quarto livro:
Título: ${livro4["titulo"]} 
Autor: ${livro4["autor"]} 
Ano de Publicação: ${livro4["anoPublicacao"]} 
Gênero: ${livro4["genero"]}
Idade de Publicação: ${livro4["idadePublicacao"]} ${livro4["idadePublicacao"] === 1 ? "ano" : "anos"} 
`);
console.log("Avaliação: Nota: " + livro4.avaliacao.nota + ", Comentário: " + livro4.avaliacao.comentario);

// Exercício 5

const livro5 = {
    titulo: "A Dança das Horas de Tchaikovsky",
    autor: "Ciclano",
    anoPublicacao: 1950,
    genero: "Arte",
    idadePublicacao: 0,
}

livro5.idadePublicacao = anoAtual - livro5.anoPublicacao

console.log(`Detalhes do quinto livro antes da alteração de gênero:
Título: ${livro5["titulo"]} 
Autor: ${livro5["autor"]} 
Ano de Publicação: ${livro5["anoPublicacao"]} 
Gênero: ${livro5["genero"]}
Idade de Publicação: ${livro5["idadePublicacao"]} ${livro5["idadePublicacao"] === 1 ? "ano" : "anos"} 
`);

livro5.genero = "Aventura"

console.log(`Detalhes do quinto livro após a alteração de gênero:
Título: ${livro5["titulo"]} 
Autor: ${livro5["autor"]} 
Ano de Publicação: ${livro5["anoPublicacao"]} 
Gênero: ${livro5["genero"]}
Idade de Publicação: ${livro5["idadePublicacao"]} ${livro5["idadePublicacao"] === 1 ? "ano" : "anos"} 
`);

// Exercício 6

const livro6 = {
    titulo: "Peaky Blinders",
    autor: "Steven Knight",
    anoPublicacao: 1919,
    genero: "Ação",
    idadePublicacao: 0,
    avaliacao: {nota: 10, comentario: "top"}
}

livro6.idadePublicacao = anoAtual - livro6.anoPublicacao

console.log(`Detalhes do sexto livro antes da exclusão da avaliação:
Título: ${livro6["titulo"]} 
Autor: ${livro6["autor"]} 
Ano de Publicação: ${livro6["anoPublicacao"]} 
Gênero: ${livro6["genero"]}
Idade de Publicação: ${livro6["idadePublicacao"]} ${livro6["idadePublicacao"] === 1 ? "ano" : "anos"} 
Avaliação: 
Nota: ${livro6.avaliacao.nota}
Comentário: ${livro6.avaliacao.comentario}
`);

delete livro6.avaliacao

console.log(`Detalhes do sexto livro após a exclusão da avaliação:
Título: ${livro6["titulo"]} 
Autor: ${livro6["autor"]} 
Ano de Publicação: ${livro6["anoPublicacao"]} 
Gênero: ${livro6["genero"]}
Idade de Publicação: ${livro6["idadePublicacao"]} ${livro6["idadePublicacao"] === 1 ? "ano" : "anos"} 
Avaliação: Nenhuma avaliação disponível
`);