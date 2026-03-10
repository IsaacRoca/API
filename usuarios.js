let usuarios = [];
let proximoId = 1;

const criarUsuario = (nome, email) => {
    const novoUsuario = { id: proximoId++, nome, email };
    usuarios.push(novoUsuario);
    return novoUsuario;
};

const listarUsuarios = () => usuarios;

const buscarUsuarioPorId = (id) => {
    return usuarios.find(u => u.id === parseInt(id));
};

module.exports = {
    criarUsuario,
    listarUsuarios,
    buscarUsuarioPorId
};