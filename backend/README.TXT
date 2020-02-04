//Inicializar projeto

1 - npm init -y

//Adcionar o microframework express

1 - npm add express

//Pasta e inicialização de servidor

1 - mkdir src 

(Criar arquivo) server.js 

//Conteudo arquivo server.js


1 - const = variarvel constante, nunca muda

    teste se tudo está OK

    const express = require('express')
    const app = express();
    app.get('/', (req, res) => {
        return res.json({message: ""});
    });
    app.listen(3333);

2 - tipos de metodos principais usados pelo modelo REST:
    GET - Buscar informações do backend 
    POST - Criar nova informação no backend (funciona somente através de formulário, o navagador por padrão somente envia GET)
    PUT - Alterar informação
    DELETE - Deletar informação

//Comando para iniciar o sistema

1 - node src/server.js (apontar o arquivo de inicialização)

//Node "ouvir" alterações em arquivos, apenas para o desenvolvimento

1 - npm add nodemon -D (-D = desenvolvimento)

2 - adicinar abaixo da licença o seguinte codigo:

    "scripts": {
        "dev": "nodemon src/server.js"
    },

3 - subir o server com o comando

    npm run dev

//Teste de requisições

insomnia.rest 


// Query Parms (parametros de requisição)

req = requisição
req.query serve para consultas mais abrangentes, onde podemos mostrar os filtros na url

app.post('/users', (req, res) => {
    return res.json({idade: req.query.idade});
});

// Route Params

url fica assim = http://localhost:3333/users/1, pois informamos somente o id do usuario

app.post('/users/:id', (req, res) => {
    return res.json({id: req.parms.id});
});


// req.body acessar o corpo da requisição

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json(req.body);
});


//banco de dados

mongodb atlas
criar cluster
npm add mongoose

//MVC

MODELS - representa um schema dentro do banco, uma entidade dentro da aplicação
digamos que eu queria cria um usuário, então vou criar um models de usuario.

CONTROLLERS - onde vai ficar as regras de nogocio (até o momento que ficar muito grande, então deve adotar um pattern (estrutura de arquivos para organizar o codigo)). O trabalho dele é receber a requisição, tratar e devolver uma resposta.

//Lib para lidar com imagens, fomarto Multipart Form Data

npm add multer
criar pasta config
criar o arquivo upload.js
