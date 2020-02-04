ReactJS
//Explicações

O react funciona atraves de componetização, para isolar partes específicas do código

//Criar Projeto

npx create-react-app <nome da pasta>

//Iniciar o Projeto

npm start

remover de
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1" /> -> não remover este
<meta name="theme-color" content="#000000" /> 
até <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> 
do inedex.html

Deletar do src

App.test.js
logo.svg
serviceWorker.js

Deletar seus imports no restante dos arquivos

// Para realizar as chamadas da API

npm add axios

criar a pasta services dentro do src
dentro criar o arquivo api.js
importar a api dentro do app.js

//Rotas ReactJS

yarn add react-router-dom