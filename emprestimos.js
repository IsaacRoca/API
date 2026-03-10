const { buscarLivroPorId, atualizarLivro } = require('./livros');
const { buscarUsuarioPorId } = require('./usuarios');

let emprestimos = [];

const emprestarLivro = (livroId, usuarioId) => {
    const livro = buscarLivroPorId(livroId);
    const usuario = buscarUsuarioPorId(usuarioId);

    if (!livro) return { erro: "Livro não encontrado." };
    if (!usuario) return { erro: "Usuário não encontrado." };
    if (!livro.disponivel) return { erro: "Livro já está emprestado." };

    atualizarLivro(livroId, { disponivel: false });

    const novoEmprestimo = {
        livroId: parseInt(livroId),
        usuarioId: parseInt(usuarioId),
        data: new Date()
    };
    emprestimos.push(novoEmprestimo);
    return novoEmprestimo;
};

const listarEmprestimos = () => emprestimos;

module.exports = { emprestarLivro, listarEmprestimos };