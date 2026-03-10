//"banco de dados" temporário
let livros = [];
let proximoId = 1;

const cadastrarLivro = (titulo, autor, ano) => {
    const novoLivro = {
        id: proximoId++,
        titulo: titulo,
        autor: autor,
        ano: ano,
        disponivel: true
    };
    livros.push(novoLivro);
    return novoLivro;
};


const listarLivros = () => {
    return livros;
};

const buscarLivroPorId = (id) => {
    return livros.find(livro => livro.id === parseInt(id));
};

const atualizarLivro = (id, novosDados) => {
    const livro = buscarLivroPorId(id);
    if (livro) {
        livro.titulo = novosDados.titulo || livro.titulo;
        livro.autor = novosDados.autor || livro.autor;
        livro.ano = novosDados.ano || livro.ano;
        return livro;
    }
    return null; 
};


const removerLivro = (id) => {
    const index = livros.findIndex(livro => livro.id === parseInt(id));
    if (index !== -1) {
        return livros.splice(index, 1)[0];
    }
    return null;
};

module.exports = {
    cadastrarLivro,
    listarLivros,
    buscarLivroPorId,
    atualizarLivro,
    removerLivro
};
module.exports = {
    cadastrarLivro,
    listarLivros
};