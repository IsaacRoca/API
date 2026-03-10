const http = require("http");
const livrosModulo = require("./livros");
const usuariosModulo = require("./usuarios");
const emprestimosModulo = require("./emprestimos");

const server = http.createServer((req, res) => {
    const { method, url } = req;
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    // Rota de teste
    if (url === "/" && method === "GET") {
        res.end(JSON.stringify({ mensagem: "API da Biblioteca Rodando!" }));
    }

    // Listar Livros
    else if (url === "/livros" && method === "GET") {
        res.end(JSON.stringify(livrosModulo.listarLivros()));
    }

    // Cadastrar Livro
    else if (url === "/livros" && method === "POST") {
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            const dados = JSON.parse(body);
            const novo = livrosModulo.cadastrarLivro(dados.titulo, dados.autor, dados.ano);
            res.writeHead(201);
            res.end(JSON.stringify(novo));
        });
    }

    else {
        res.writeHead(404);
        res.end(JSON.stringify({ erro: "Rota não encontrada" }));
    }
});

server.listen(3000, () => {
    console.log("🚀 Servidor pronto em http://localhost:3000");
});