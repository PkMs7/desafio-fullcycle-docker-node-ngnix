# Desafio Full Cycle 2 - Imagens Docker com Node e Ngnix

## Requisitos do Desafio:


Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

1. O retorno da aplicação node.js para o nginx deverá ser:

- <h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

2. Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

3. Não esqueça de colocar o volume na aplicação para o ambiente de desenvolvimento. 

4. Suba tudo em um repositório e faça a entrega.

**Importante** A linguagem de programação para este desafio é Node/JavaScript.

## Comandos Docker-Compose

**Gerar o Build das Imagens e Subir os Containers**

```docker-compose up --build -d```

## Docker Hub

-> [Repositório das Imagens do Desafio no Docker Hub](https://hub.docker.com/r/patrickmarquesdev/fullcycle)